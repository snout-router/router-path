import {Param, path} from '../../src/main'

describe('path()', () => {
  describe('path.match()', () => {
    it('should return params for matching paths with single params', () => {
      const subject = path`/a/${'p1'}/b`

      expect(subject.match('/a/x/b')).toStrictEqual({p1: 'x'})
      expect(subject.match('/a/y/b')).toStrictEqual({p1: 'y'})
    })

    it('should return params for matching paths with multiple params', () => {
      const subject = path`/a/${'p1'}/b/${'p2'}/c`

      expect(subject.match('/a/x/b/y/c')).toStrictEqual({p1: 'x', p2: 'y'})
      expect(subject.match('/a/y/b/z/c')).toStrictEqual({p1: 'y', p2: 'z'})
    })

    it('should match paths with hyphens', () => {
      expect(path`/a/${'p-1'}-${'p-2'}`.match('/a/x-y')).toStrictEqual({'p-1': 'x', 'p-2': 'y'})
      expect(path`/a/${'p-1'}-${'p-2'}`.match('/a/x.y')).toBeUndefined()
    })

    it('should match paths with periods', () => {
      expect(path`/a/${'p.1'}.${'p.2'}`.match('/a/x.y')).toStrictEqual({'p.1': 'x', 'p.2': 'y'})
      expect(path`/a/${'p.1'}.${'p.2'}`.match('/a/x-y')).toBeUndefined()
    })

    it('should return undefined for non-matching paths', () => {
      expect(path`/a/${'p1'}`.match('/b/x')).toBeUndefined()
    })

    it('should not match empty path segments', () => {
      expect(path`/a/${'p1'}/b`.match('/a//b')).toBeUndefined()
    })

    it('should not match multiple path segments as one param', () => {
      expect(path`/a/${'p1'}/b`.match('/a/x/y/b')).toBeUndefined()
    })

    it('should treat unmatched optional capturing groups as empty string matches', () => {
      const p2: Param<'p2'> = {
        name: 'p2',
        exp: /(y)?/,
        parse: match => match,
        format: arg => arg,
      }

      expect(path`/a/${'p1'}/b/${p2}`.match('/a/x/b/')).toStrictEqual({p1: 'x', p2: ''})
    })

    it('should complain about params that do not create a capturing group', () => {
      const p2: Param<'p2'> = {
        name: 'p2',
        exp: /y/,
        parse: match => match,
        format: arg => arg,
      }

      const subject = path`/a/${'p1'}/b/${p2}`

      expect(() => { subject.match('/a/x/b/y') }).toThrow('Invalid match count')
    })

    it('should complain about params that create multiple capturing groups', () => {
      const p2: Param<'p2'> = {
        name: 'p2',
        exp: /((y))/,
        parse: match => match,
        format: arg => arg,
      }

      const subject = path`/a/${'p1'}/b/${p2}`

      expect(() => { subject.match('/a/x/b/y') }).toThrow('Invalid match count')
    })
  })

  describe('path.test()', () => {
    it('should return true for matching paths with single params', () => {
      const subject = path`/a/${'p1'}/b`

      expect(subject.test('/a/x/b')).toBe(true)
      expect(subject.test('/a/y/b')).toBe(true)
    })

    it('should return true for matching paths with multiple params', () => {
      const subject = path`/a/${'p1'}/b/${'p2'}/c`

      expect(subject.test('/a/x/b/y/c')).toBe(true)
      expect(subject.test('/a/y/b/z/c')).toBe(true)
    })

    it('should match paths with hyphens in between names', () => {
      expect(path`/a/${'p-1'}-${'p-2'}`.test('/a/x-y')).toBe(true)
      expect(path`/a/${'p-1'}-${'p-2'}`.test('/a/x,y')).toBe(false)
    })

    it('should match paths with periods in between names', () => {
      expect(path`/a/${'p-1'}.${'p-2'}`.test('/a/x.y')).toBe(true)
      expect(path`/a/${'p-1'}.${'p-2'}`.test('/a/x-y')).toBe(false)
    })

    it('should match paths with hyphens in names', () => {
      expect(path`/a/${'p-1'}`.test('/a/x')).toBe(true)
    })

    it('should return false for non-matching paths', () => {
      expect(path`/a/${'p1'}`.test('/b/x')).toBe(false)
    })

    it('should not match empty path segments', () => {
      expect(path`/a/${'p1'}/b`.test('/a//b')).toBe(false)
    })

    it('should not match multiple path segments as one param', () => {
      expect(path`/a/${'p1'}/b`.test('/a/x/y/b')).toBe(false)
    })
  })
  describe('path.build()', () => {
    it('should build paths with no params', () => {
      expect(path`/a/b`.build({})).toBe('/a/b')
    })

    it('should build paths with a single param', () => {
      const subject = path`/a/${'p1'}/b`

      expect(subject.build({p1: 'x', ignored: 'ignored'})).toBe('/a/x/b')
      expect(subject.build({p1: 'y', ignored: 'ignored'})).toBe('/a/y/b')
    })

    it('should build paths with multiple params', () => {
      const subject = path`/a/${'p1'}/b/${'p2'}/c`

      expect(subject.build({p1: 'x', p2: 'y', ignored: 'ignored'})).toBe('/a/x/b/y/c')
      expect(subject.build({p1: 'y', p2: 'z', ignored: 'ignored'})).toBe('/a/y/b/z/c')
    })

    it('should build paths with hyphens', () => {
      expect(path`/a/${'p-1'}-${'p-2'}`.build({'p-1': 'x', 'p-2': 'y'})).toBe('/a/x-y')
      expect(path`/a/${'p-1'}-${'p-2'}`.build({'p-1': 'w-x', 'p-2': 'y-z'})).toBe('/a/w-x-y-z')
    })

    it('should build paths with periods', () => {
      expect(path`/a/${'p.1'}.${'p.2'}`.build({'p.1': 'x', 'p.2': 'y'})).toBe('/a/x.y')
      expect(path`/a/${'p.1'}.${'p.2'}`.build({'p.1': 'w.x', 'p.2': 'y.z'})).toBe('/a/w.x.y.z')
    })

    it('should complain about missing params', () => {
      expect(() => path`/a/${'p1'}/b/${'p2'}`.build({p1: 'a', p2: ''})).toThrow('Missing param "p2"')
      // @ts-expect-error
      expect(() => path`/a/${'p1'}/b/${'p2'}`.build({p1: 'a', p2: null})).toThrow('Missing param "p2"')
      // @ts-expect-error
      expect(() => path`/a/${'p1'}/b/${'p2'}`.build({p1: 'a', p2: undefined})).toThrow('Missing param "p2"')
      // @ts-expect-error
      expect(() => path`/a/${'p1'}/b/${'p2'}`.build({p1: 'a'})).toThrow('Missing param "p2"')
    })

    it('should allow omission of params that accept undefined as an arg', () => {
      const p1: Param<'p1', string | undefined> = {
        name: 'p1',
        exp: /([^/]+)/,
        parse: match => match === '' ? undefined : match,
        format: (arg = 'x') => arg,
      }
      const subject = path`/a/${p1}`

      expect(subject.build({})).toBe('/a/x')
      expect(subject.build({p1: 'y'})).toBe('/a/y')
    })
  })
})
