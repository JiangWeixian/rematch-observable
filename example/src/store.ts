import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import createRematchObservable, { RematchObserverDependencies } from 'rematch-observable'

import * as models from './models'
import { sharkEpics } from './epics/sharks'

const rematchObservable = createRematchObservable({ epics: { sharkEpics }, models })

export const store = init({
  models,
  plugins: [rematchObservable],
})

export type Store = typeof store
export type Dispatch = RematchDispatch<typeof models>
export type RootState = RematchRootState<typeof models>
export type Dependencies = RematchObserverDependencies<Dispatch>
