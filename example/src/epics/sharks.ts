import { Epic } from 'redux-observable'
import { filter } from 'rxjs/operators'

export const sharkEpics: Epic<any, any, any> = (action$, state$) => {
  return action$.pipe(
    filter(v => {
      console.log(v)
      return v.type === 'dolphins'
    }),
  )
}
