import * as index from '../../src/index'
import {path} from '../../src/main'

describe('module index', () => {
  it('should provide access to path()', () => {
    expect(index.path).toBe(path)
  })
})
