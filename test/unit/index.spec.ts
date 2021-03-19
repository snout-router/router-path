import * as index from '../../src/index'
import {param, path} from '../../src/main'

describe('module index', () => {
  it('should provide access to param()', () => {
    expect(index.param).toBe(param)
  })

  it('should provide access to path()', () => {
    expect(index.path).toBe(path)
  })
})
