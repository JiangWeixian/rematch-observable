import { init } from '@rematch/core'
import { mapTo } from 'rxjs/operators'
import createRematchObservable, { ofType } from '../src'
import { sharks, dolphins, delay } from './utils'

const sharkEpics = (action$, state$, { dispatchers }) => {
  return action$.pipe(
    ofType(dispatchers.dolphins.increment, dispatchers.dolphins.incrementAsync),
    mapTo(dispatchers.sharks.increment(1)),
  )
}

const models = {
  sharks,
  dolphins,
}

describe('rematch observable', () => {
  test('rematch observable listen normal dispatch', () => {
    const rematchObservable = createRematchObservable({ epics: { sharkEpics }, models })
    const store = init({
      models,
      plugins: [rematchObservable],
    })
    store.dispatch.dolphins.increment()
    expect(store.getState()).toEqual({
      sharks: 1,
      dolphins: 2,
    })
  })

  test('rematch observable listen effect dispatch', async () => {
    const rematchObservable = createRematchObservable({ epics: { sharkEpics }, models })
    const store = init({
      models,
      plugins: [rematchObservable],
    })
    store.dispatch.dolphins.incrementAsync()
    await delay(1000)
    expect(store.getState()).toEqual({
      sharks: 2,
      dolphins: 2,
    })
  })
})
