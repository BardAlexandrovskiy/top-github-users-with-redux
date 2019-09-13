import { CHANGE_VALUE, INPUT_PRESS } from '../actions/inputSearchAction'

const initialState = {
  value: '',
}

export function inputSearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.payload }
    case INPUT_PRESS:
      return { ...state, value: '' }
    default:
      return state
  }
}
