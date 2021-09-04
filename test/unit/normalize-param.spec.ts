import {normalizeParam, Param} from '../../src/main'

describe('normalizeParam()', () => {
  it('should return Param objects unmodified', () => {
    const p1: Param<'p1'> = {
      name: 'p1',
      exp: /.*/,
      format: arg => arg,
      parse: match => match,
    }

    expect(normalizeParam(p1)).toBe(p1)
  })

  it('should convert strings to simple route parameters', () => {
    const actual = normalizeParam('p1')

    expect(actual).toMatchObject({name: 'p1', exp: /([^/]+)/})
    expect(actual.parse('x')).toBe('x')
    expect(actual.format('x')).toBe('x')
    expect(() => actual.format('')).toThrow('Missing param "p1"')
    // @ts-expect-error
    expect(() => actual.format(null)).toThrow('Missing param "p1"')
    // @ts-expect-error
    expect(() => actual.format(undefined)).toThrow('Missing param "p1"')
    // @ts-expect-error
    expect(() => actual.format()).toThrow('Missing param "p1"')
  })
})
