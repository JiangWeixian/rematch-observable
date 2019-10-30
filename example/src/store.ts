import { init, RematchRootState, RematchDispatch } from '@rematch/core'
// import { combineEpics, createEpicMiddleware } from 'redux-observable'
// import { compose, createStore, applyMiddleware } from 'redux'

import * as models from './models'
import { sharkEpics } from './epics/sharks'

// const epics = combineEpics(...[sharkEpics])
// const epicsMiddware = createEpicMiddleware()

// const newCreateStore: any = (reducer, initalState, enhancer) => {
//   return createStore(
//     reducer,
//     initalState,
//     compose(
//       applyMiddleware(...[epicsMiddware]),
//       enhancer,
//     ),
//   )
// }

import createRematchObservable from 'rematch-observable'

const rematchObservable = createRematchObservable({ epics: { sharkEpics } })

export const store = init({
  models,
  plugins: [rematchObservable],
})

// epicsMiddware.run(epics)

export type Store = typeof store
export type Dispatch = RematchDispatch<typeof models>
export type RootState = RematchRootState<typeof models>
