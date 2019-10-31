<h1>rematch-observable</h1>
<p>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/jiangweixian/rematch-observable?label=rematch-observable&logo=npm&style=for-the-badge" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />
  </a>
  <a href="https://twitter.com/jiangweixian" target="_blank">
    <img alt="Twitter: jiangweixian" src="https://img.shields.io/twitter/follow/jiangweixian.svg?style=for-the-badge" />
  </a>
</p>

> redux-observable in rematch

## Setup

```bash
npm install rematch-observable --save
```

## Usage
> see more in [example](https://github.com/JiangWeixian/rematch-observable/tree/master/example)

```tsx
// import
import { init, RematchRootState, RematchDispatch } from '@rematch/core'

// setup plugin
const rematchObservable = createRematchObservable({ epics: { sharkEpics }, models })

export const store = init({
  models,
  plugins: [rematchObservable],
})

// types
export type Dependencies = RematchObserverDependencies<Dispatch>

// epics
import { RematchEpic, ofType } from 'rematch-observable'
import { mapTo } from 'rxjs/operators'
import { RootState, Dependencies } from 'src/store'

export const sharkEpics: RematchEpic<RootState, Dependencies> = (
  action$,
  state$,
  { dispatchers },
) => {
  return action$.pipe(
    ofType(dispatchers.dolphins.increment, dispatchers.dolphins.incrementAsync),
    mapTo(dispatchers.sharks.increment(1)),
  )
}
```

## Author

👤 **JiangWeixian**

* Twitter: [@jiangweixian](https://twitter.com/jiangweixian)
* Github: [@jiangweixian](https://github.com/jiangweixian)

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/jiangweixian">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_