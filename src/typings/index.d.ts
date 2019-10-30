import { Epic } from 'redux-observable'
import { Plugin } from '@rematch/core'

export default function createReamtchObservable(params: { epics: { [key: string]: Epic } }): Plugin
