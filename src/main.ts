import {escape} from '@snout/regexp'

import {AllowOmitUndefined, Cast} from './types'

export type AnyParam = Param<string, any>

export function normalizeParam<P extends ParamOrString> (p: P): NormalizeParam<P> {
  if (typeof p === 'string') {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      name: p,
      exp: /([^/]+)/,
      parse: match => match,
      format: (arg = '') => {
        if (arg === '' || arg == null) throw new Error(`Missing param "${p}"`)

        return arg
      },
    } as NormalizeParam<P>
  }

  return p as NormalizeParam<P>
}

export type NormalizeParam<P extends ParamOrString> = P extends string ? Param<P> : Cast<P, AnyParam>

export interface Param<Name extends string, Arg = string> {
  readonly name: Name
  readonly exp: RegExp
  parse: (match: string) => Arg
  format: (arg: Arg) => string
}

export type ParamArg<Subject extends AnyParam> = Subject extends Param<string, infer Arg> ? Arg : never
export type ParamName<Subject extends AnyParam> = Subject extends Param<infer Name, any> ? Name : never
export type ParamOrString = AnyParam | string

export interface PathPattern<Params extends AnyParams> {
  match: (path: string) => Result<Params> | undefined
  test: (path: string) => boolean
  build: (args: Args<Params>) => string
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

    build (args: ArgsForParams): string {
      let path = start
      let i = 0

      for (const param of normalized) {
        path += `${param.format(args[param.name])}${ends[i++]}`
      }

      return path
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

type Result<Params extends AnyParams> = Params extends Array<Param<infer Name, any>>
  ? { [Key in Name]: ParamArg<Extract<Params[number], Param<Key, any>>> }
  : { [Key in string]: any }

type Args<Params extends AnyParams> = AllowOmitUndefined<Result<Params>> & { [Key in string]: any }

type NormalizeParams<Params extends ParamsOrStrings> = {
  [Key in keyof Params]: NormalizeParam<Cast<Params[Key], ParamOrString>>
}
