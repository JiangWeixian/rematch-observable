import { isActionOf } from '../src'
import { getDispatchers } from '../src/utils/getDispatchers'
import { sharks, dolphins } from './utils'

const models = {
  sharks,
  dolphins,
}

const dispatchers = getDispatchers(models)

describe('isActionOf', () => {
  test('return of isAction should be function', () => {
    expect(typeof isActionOf(dispatchers.sharks.increment)).toBe('function')
  })

  test('should return false when dispatch different action type', () => {
    const filter = isActionOf({ type: 'isActionOf' })
    expect(filter({ type: 'increment', payload: undefined, meta: undefined }, 1)).toBe(false)
  })

  test('should return false when dispatch different action type', () => {
    const filter = isActionOf(dispatchers.sharks.increment)
    expect(filter({ type: 'sharks/increment', payload: 1, meta: 1 }, 1)).toBe(true)
  })
})
