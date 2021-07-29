export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const dolphins = {
  state: 1,
  reducers: {
    increment: (state) => state + 1,
  },
  effects: {
    async incrementAsync() {
      await delay(500)
      this.increment(1)
    },
  },
}

export const sharks = {
  state: 0,
  reducers: {
    increment: (state, payload: number) => state + payload,
  },
  effects: {
    async incrementAsync(payload: number) {
      await delay(500)
      this.increment(payload || 1)
    },
  },
}
