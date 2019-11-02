import { getDispatchers } from '../src/utils/getDispatchers'
import { sharks, dolphins } from './utils'

const models = {
  sharks,
  dolphins,
}

const dispatchers = getDispatchers(models)

describe('test utils getDispatchers', () => {
  test('dispatchers has same structure as models', () => {
    expect(Object.keys(dispatchers)).toEqual(['sharks', 'dolphins'])
    expect(Object.keys(dispatchers.sharks)).toEqual(['increment', 'incrementAsync'])
    expect(Object.keys(dispatchers.dolphins)).toEqual(['increment', 'incrementAsync'])
  })

  test('value of dispatchers should be function', () => {
    Object.keys(dispatchers.sharks).forEach(key => {
      expect(typeof dispatchers.sharks[key]).toBe('function')
    })

    Object.keys(dispatchers.dolphins).forEach(key => {
      expect(typeof dispatchers.dolphins[key]).toBe('function')
    })
  })

  test('item in dispatchers has propety type', () => {
    Object.keys(dispatchers.sharks).forEach(key => {
      expect(dispatchers.sharks[key].type).toBe(`sharks/${key}`)
    })

    Object.keys(dispatchers.dolphins).forEach(key => {
      expect(dispatchers.dolphins[key].type).toBe(`dolphins/${key}`)
    })
  })

  test('dispatchers should dispatch original redux action', () => {
    expect(dispatchers.sharks.increment()).toEqual({
      type: 'sharks/increment',
      payload: undefined,
      meta: undefined,
    })
  })
})
