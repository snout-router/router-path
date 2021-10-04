import {Param, ParamName} from '../../../src/main'
import {hasType} from '../../helpers'

describe('ParamName', () => {
  const a: Param<'a'> = {
    name: 'a',
    exp: /./,
    parse: match => match,
    format: arg => arg,
  }

  const b: Param<'b'> = {
    name: 'b',
    exp: /./,
    parse: match => match,
    format: arg => arg,
  }

  it('should accept the Name type of a Param', () => {
    expect(hasType<ParamName<typeof a>>('a')).toBeNull()
    expect(hasType<ParamName<typeof b>>('b')).toBeNull()
  })

  it('should not accept types other than the Name type of a Param', () => {
    // @ts-expect-error
    expect(hasType<ParamName<typeof a>>('b')).toBeNull()
    // @ts-expect-error
    expect(hasType<ParamName<typeof b>>('a')).toBeNull()
  })

  it('should not support non-Param types', () => {
    // @ts-expect-error
    expect(hasType<ParamName<'p'>>('x')).toBeNull()
  })
})
