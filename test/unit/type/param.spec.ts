import {Param} from '../../../src/main'

describe('Param', () => {
  it('should not allow any properties to be modified', () => {
    const a: Param<'a'> = {
      name: 'a',
      exp: /./,
      parse: match => match,
      format: arg => arg,
    }
    const exp = /.*/
    const fn = (x: string): string => x

    // @ts-expect-error
    expect(a.name = 'a').toBe('a')
    // @ts-expect-error
    expect(a.exp = exp).toBe(exp)
    // @ts-expect-error
    expect(a.parse = fn).toBe(fn)
    // @ts-expect-error
    expect(a.format = fn).toBe(fn)
  })
})
