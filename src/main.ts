import {escape} from '@snout/regexp'

import {AllowOmitUndefined, Cast} from './types'

export type AnyParam = Param<string, any>

/**
 * Normalizes the type of params specified as strings into Param types
 *
 * - For string types, the type becomes the name of the param, and the Arg and Result types become "string"
 * - All other params are returned as-is
 */
export type NormalizeParam<NameOrParam extends ParamOrString> = NameOrParam extends string
  ? Param<NameOrParam, string>
  : Cast<NameOrParam, AnyParam>

export interface Param<Name extends string, Arg, Result = Arg> {
  readonly name: Name
  readonly exp: RegExp
  build: (arg: Arg) => string
  parse: (match: string) => Result
}

export function param<Name extends string> (name: Name, exp: RegExp = /([^/]+)/): Param<Name, string> {
  return {
    name,
    exp,
    build: (arg = '') => {
      if (arg === '' || arg == null) throw new Error(`Missing param "${name}"`)

      return arg
    },
    parse: match => match,
  }
}

/**
 * Extracts the arg type from a param type
 */
export type ParamArg<Subject extends AnyParam> = Subject extends Param<string, infer Arg, any> ? Arg : never

/**
 * A Param type, or a string type to be normalized into a Param type via NormalizeParam
 */
export type ParamOrString = AnyParam | string

export interface Path<Params extends AnyParams> {
  build: (params: Args<Params>) => string
  match: (path: string) => Result<Params> | undefined
  test: (path: string) => boolean
}

export function path<Params extends ParamsOrStrings> (
  literals: TemplateStringsArray,
  ...params: Params
): Path<NormalizeParams<Params>> {
  type NormalizedParams = NormalizeParams<Params>
  type ArgsForParams = Args<NormalizedParams>
  type ResultForParams = Result<NormalizedParams>

  const [start, ...ends] = literals
  const normalized = params.map(p => typeof p === 'string' ? param(p) : p) as NormalizedParams
  let exp: RegExp | undefined

  return {
    build (args: ArgsForParams): string {
      let path = start
      let i = 0

      for (const param of normalized) {
        path += `${param.build(args[param.name])}${ends[i++]}`
      }

      return path
    },

    match (path: string): ResultForParams | undefined {
      const result = buildExp().exec(path)

      if (result == null) return undefined

      result.shift()
      if (result.length !== normalized.length) throw new Error('Invalid match count')

      const args: Record<string, any> = {}
      let i = 0

      for (const param of normalized) {
        const {[i++]: paramMatch = ''} = result
        args[param.name] = param.parse(paramMatch)
      }

      return args as ResultForParams
    },

    test (path: string): boolean {
      return buildExp().test(path)
    },
  }

  function buildExp (): RegExp {
    if (exp == null) {
      let pattern = `^${escape(start)}`
      let i = 0

      for (const param of normalized) {
        pattern += `${param.exp.source}${escape(ends[i++])}`
      }

      exp = new RegExp(`${pattern}$`, 'u')
    }

    return exp
  }
}

type AnyParams = AnyParam[]
type ParamsOrStrings = ParamOrString[]

/**
 * Constructs the type for the result of a successful match against a path with the supplied param types
 */
type Result<Params extends AnyParams> = Params extends Array<Param<infer Name, any>>
  ? { [Key in Name]: ParamResult<Extract<Params[number], Param<Key, any>>> }
  : { [Key in string]: any }

/**
 * Extracts the result type from a param type
 */
type ParamResult<Subject extends AnyParam> = Subject extends Param<string, any, infer Result> ? Result : never

/**
 * Constructs the type for acceptable input when building a path with the supplied param types
 */
type Args<Params extends AnyParams> = Params extends Array<Param<infer Name, any>>
  ? AllowOmitUndefined<{ [Key in Name]: ParamArg<Extract<Params[number], Param<Key, any>>> }> & { [Key in string]: any }
  : { [Key in string]: any }

/**
 * Normalizes an indexed access type (i.e. an array type) of param types, using NormalizeParam
 */
type NormalizeParams<Params extends ParamsOrStrings> = {
  [Key in keyof Params]: NormalizeParam<Cast<Params[Key], ParamOrString>>
}
