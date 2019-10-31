import { Models } from '@rematch/core'

export const getDispatchers = (models: Models): any => {
  const dispatchers = {}
  Object.keys(models).forEach(key => {
    const model = models[key]
    if (!dispatchers[key]) {
      dispatchers[key] = {}
    }
    if (model.reducers) {
      Object.keys(model.reducers).forEach(reduerKey => {
        const actionType = `${key}/${reduerKey}`
        dispatchers[key][reduerKey] = (payload: any, meta: any) => {
          return { type: actionType, payload, meta }
        }
        dispatchers[key][reduerKey].type = actionType
      })
    }
    if (model.effects) {
      Object.keys(model.effects).forEach(effectKey => {
        const actionType = `${key}/${effectKey}`
        dispatchers[key][effectKey] = (payload: any, meta: any) => {
          return { type: actionType, payload, meta }
        }
        dispatchers[key][effectKey].type = actionType
      })
    }
  })
  return dispatchers
}
