import { combineEpics, createEpicMiddleware, Epic, ofType as rdxOfType } from 'redux-observable'
import { Plugin, Models, RematchDispatcher, EffectRematchDispatcher } from '@rematch/core'
import { createStore, applyMiddleware, compose, StoreCreator } from 'redux'

import { getDispatchers } from './utils/getDispatchers'

export const isActionOf = (dispatcher: { type: string }) => {
  return (value: { type: string; payload: any; meta: any }) => {
    return value && dispatcher.type && dispatcher.type === value.type
  }
}

export const ofType = (...dispatchers: (RematchDispatcher | EffectRematchDispatcher)[]) => {
  const [arg, ...rest] = dispatchers
    .map((dispatcher) => (dispatcher as any).type)
    .filter((type) => !!type)
  return rdxOfType(arg, ...rest)
}

const createRematchObservable = ({
  epics,
  models,
}: {
  epics: { [key: string]: Epic }
  models: Models
}): Plugin => {
  const dispatchers = getDispatchers(models)
  const epic = combineEpics(...Object.values(epics))
  const epicMiddleware = createEpicMiddleware({ dependencies: { dispatchers } })
  return {
    config: {
      redux: {
        createStore: ((reducers: any, initialState: any, enhancer: any) => {
          return createStore(
            reducers,
            initialState,
            compose(applyMiddleware(...[epicMiddleware]), enhancer),
          )
        }) as StoreCreator,
      },
    },
    onStoreCreated() {
      epicMiddleware.run(epic)
    },
  }
}

export default createRematchObservable
