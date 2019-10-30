import { useDispatch } from 'react-redux'

import { Dispatch } from '../store'

export const useIncrement = () => {
  const dispatch = useDispatch<Dispatch>()
  return () => {
    dispatch.dolphins.increment()
    dispatch.sharks.increment(1)
  }
}
