import {path} from '../../../src/main'

describe('PathPattern', () => {
  it('should not allow any properties to be modified', () => {
    const a = path`/a`
    const match = (x: string): undefined => undefined
    const test = (x: string): false => false
    const build = (x: {}): string => ''

    // @ts-expect-error
    expect(a.match = match).toBe(match)
    // @ts-expect-error
    expect(a.test = test).toBe(test)
    // @ts-expect-error
    expect(a.build = build).toBe(build)
  })
})
