import { combineEpics, createEpicMiddleware, Epic } from 'redux-observable'
import { Plugin } from '@rematch/core'
import { createStore, applyMiddleware, compose, StoreCreator } from 'redux'

const createRematchObservable = ({ epics }: { epics: { [key: string]: Epic } }): Plugin => {
  const epic = combineEpics(...Object.values(epics))
  const epicMiddleware = createEpicMiddleware()
  return {
    config: {
      redux: {
        createStore: ((reducers: any, initialState: any, enhancer: any) => {
          return createStore(
            reducers,
            initialState,
            compose(
              applyMiddleware(...[epicMiddleware]),
              enhancer,
            ),
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
