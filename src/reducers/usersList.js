import { SET_USERS } from '../actions/usersListAction'

const initialState = { usersArr: [] }

export function arrUsersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, usersArr: action.payload }
    default:
      return state
  }
}
