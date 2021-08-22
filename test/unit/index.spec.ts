import * as index from '../../src/index'
import {normalizeParam, param, path} from '../../src/main'

describe('module index', () => {
  it('should provide access to normalizeParam()', () => {
    expect(index.normalizeParam).toBe(normalizeParam)
  })

  it('should provide access to param()', () => {
    expect(index.param).toBe(param)
  })

  it('should provide access to path()', () => {
    expect(index.path).toBe(path)
  })
})
