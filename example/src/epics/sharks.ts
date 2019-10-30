import { Epic } from 'redux-observable'
import { filter, mapTo } from 'rxjs/operators'

export const sharkEpics: Epic<any, any, any> = (action$, state$) => {
  return action$.pipe(
    filter(v => {
      return v.type === 'dolphins/increment'
    }),
    mapTo({ type: 'sharks/increment', payload: 1 }),
  )
}
