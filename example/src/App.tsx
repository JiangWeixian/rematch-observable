import * as React from 'react'
import { connect } from 'react-redux'

import { Dispatch, RootState } from './store'

const mapState = (state: RootState) => ({
  dolphins: state.dolphins,
  sharks: state.sharks,
})

const mapDispatch = (dispatch: Dispatch) => ({
  incrementDolphins: dispatch.dolphins.increment,
  incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
  incrementSharks: () => dispatch.sharks.increment(1),
  incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
  incrementSharksAsync2: () => dispatch({ type: 'sharks/incrementAsync', payload: 2 }),
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

function Count(props: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: 120 }}>
        <h3>Dolphins</h3>
        <h1>{props.dolphins}</h1>
        <button onClick={props.incrementDolphins}>+1</button>
        <button onClick={props.incrementDolphinsAsync}>Async +1</button>
      </div>
      <div style={{ width: 200 }}>
        <h3>Sharks</h3>
        <h1>{props.sharks}</h1>
        <button onClick={props.incrementSharks}>+1</button>
        <button onClick={props.incrementSharksAsync}>Async +1</button>
        <button onClick={props.incrementSharksAsync2}>Async +2</button>
      </div>
    </div>
  )
}

export default connect(
  mapState,
  mapDispatch,
)(Count)
