import { ALERT_ERROR, HIDE_ERROR } from '../actions/errorAction'

const initialState = {
  display: 'none',
}

export function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ALERT_ERROR:
      return { ...state, display: 'block' }
    case HIDE_ERROR:
      return { ...state, display: 'none' }
    default:
      return state
  }
}
