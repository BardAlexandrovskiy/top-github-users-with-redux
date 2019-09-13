import { combineReducers } from 'redux'
import { inputSearchReducer } from './inputSearch'
import { arrUsersReducer } from './usersList'
import { errorReducer } from './error'

export const rootReducer = combineReducers({
  inputSearch: inputSearchReducer,
  users: arrUsersReducer,
  error: errorReducer,
})
