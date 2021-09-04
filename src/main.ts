import {escape} from '@snout/regexp'

import {AllowOmitUndefined, Cast} from './types'

export type AnyParam = Param<string, any>

export function normalizeParam<P extends ParamOrString> (p: P): NormalizeParam<P> {
  if (typeof p === 'string') {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      name: p,
      exp: /([^/]+)/,
      format: (arg = '') => {
        if (arg === '' || arg == null) throw new Error(`Missing param "${p}"`)

        return arg
      },
      parse: match => match,
    } as NormalizeParam<P>
  }

  return p as NormalizeParam<P>
}

/**
 * Normalizes the type of params specified as strings into Param types
 *
 * - For string types, the type becomes the name of the param, and the Arg and Result types become "string"
 * - All other params are returned as-is
 */
export type NormalizeParam<NameOrParam extends ParamOrString> = NameOrParam extends string
  ? Param<NameOrParam>
  : Cast<NameOrParam, AnyParam>

export interface Param<Name extends string, Arg = string> {
  readonly name: Name
  readonly exp: RegExp
  format: (arg: Arg) => string
  parse: (match: string) => Arg
}

/**
 * Extracts the arg type from a param type
 */
export type ParamArg<Subject extends AnyParam> = Subject extends Param<string, infer Arg> ? Arg : never

/**
 * A Param type, or a string type to be normalized into a Param type via NormalizeParam
 */
export type ParamOrString = AnyParam | string

export interface PathPattern<Params extends AnyParams> {
  build: (args: Args<Params>) => string
  match: (path: string) => Result<Params> | undefined
  test: (path: string) => boolean
}

export function path<Params extends ParamsOrStrings> (
  literals: TemplateStringsArray,
  ...params: Params
): PathPattern<NormalizeParams<Params>> {
  type NormalizedParams = NormalizeParams<Params>
  type ArgsForParams = Args<NormalizedParams>
  type ResultForParams = Result<NormalizedParams>

  const [start, ...ends] = literals
  const normalized = params.map(normalizeParam) as NormalizedParams
  let exp: RegExp | undefined

  return {
    build (args: ArgsForParams): string {
      let path = start
      let i = 0

      for (const param of normalized) {
        path += `${param.format(args[param.name])}${ends[i++]}`
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
  ? { [Key in Name]: ParamArg<Extract<Params[number], Param<Key, any>>> }
  : { [Key in string]: any }

/**
 * Constructs the type for acceptable input when building a path with the supplied param types
 */
type Args<Params extends AnyParams> = AllowOmitUndefined<Result<Params>> & { [Key in string]: any }

/**
 * Normalizes an indexed access type (i.e. an array type) of param types, using NormalizeParam
 */
type NormalizeParams<Params extends ParamsOrStrings> = {
  [Key in keyof Params]: NormalizeParam<Cast<Params[Key], ParamOrString>>
}
