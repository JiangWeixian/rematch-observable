import { delay } from '../helpers'

export type SharksState = number

export const sharks = {
  state: 0,
  reducers: {
    increment: (state: SharksState, payload: number): SharksState => state + payload,
    setLoading: (state: SharksState, payload: boolean) => state + 1,
  },
  effects: {
    async incrementAsync(payload: number) {
      await delay(500)
      this.setLoading(true)
      this.increment(payload || 1)
    },
  },
}
