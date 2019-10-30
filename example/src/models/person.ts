import { delay } from '../helpers'

export type PesonState = number

export const person = {
  state: 0,
  reducers: {
    increment: state => state + 1,
  },
  effects: {
    async incrementAsync() {
      await delay(500)
      this.increment()
    },
  },
}
