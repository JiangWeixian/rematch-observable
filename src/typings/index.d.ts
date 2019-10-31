import { Epic, ofType as rdxOfType } from 'redux-observable'
import {
  Plugin,
  Action,
  Models,
  ModelReducers,
  RematchDispatch,
  RematchDispatcherAsync,
  RematchDispatcher,
} from '@rematch/core'

export default function createReamtchObservable(params: {
  epics: { [key: string]: Epic }
  models: Models
}): Plugin

export type ReturnOfIsActionOf = (value: any, index: number) => boolean

export function isActionOf(
  dispatcher: RematchDispatcherAsync<any, any> | RematchDispatcher<any, any>,
): ReturnOfIsActionOf

export function ofType(
  ...dispatchers: (RematchDispatcherAsync<any, any> | RematchDispatcher<any, any>)[]
): ReturnType<typeof rdxOfType>

export type RematchEpic<S = any, D = any> = Epic<Action<any, any>, Action<any, any>, S, D>

export type RematchObserverDependencies<D> = {
  dispatchers: D
}
