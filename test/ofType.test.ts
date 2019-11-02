import { ofType } from '../src'
import { Subject } from 'rxjs'
import { getDispatchers } from '../src/utils/getDispatchers'
import { sharks, dolphins } from './utils'

const models = {
  sharks,
  dolphins,
}

const dispatchers = getDispatchers(models)

describe('ofType', () => {
  test('should filter by action type', () => {
    let actions = new Subject()
    let lulz: any[] = []

    actions.pipe(ofType(dispatchers.sharks.increment) as any).subscribe(x => lulz.push(x))
    actions.next(dispatchers.sharks.increment(1))
    expect(lulz).toEqual([{ type: 'sharks/increment', payload: 1 }])
  })

  test('should filter by multiple types', () => {
    let actions = new Subject()
    let lulz: any[] = []

    actions
      .pipe(ofType(dispatchers.sharks.increment, dispatchers.dolphins.increment) as any)
      .subscribe(x => lulz.push(x))
    actions.next(dispatchers.sharks.increment(1))
    expect(lulz).toEqual([{ type: 'sharks/increment', payload: 1 }])
    actions.next(dispatchers.dolphins.increment())
    expect(lulz).toEqual([{ type: 'sharks/increment', payload: 1 }, { type: 'dolphins/increment' }])
  })
})
