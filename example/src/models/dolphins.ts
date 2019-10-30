import { delay } from '../helpers'

export type DolphinsState = number

export const dolphins = {
  state: 1,
  reducers: {
    increment: (state, payload: number) => state + payload,
  },
  effects: {
    async incrementAsync() {
      await delay(500)
      this.increment(1)
    },
  },
}
