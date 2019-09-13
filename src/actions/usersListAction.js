export const SET_USERS = 'SET_USERS'

export function setUsers(usersArr) {
  return {
    type: SET_USERS,
    payload: usersArr,
  }
}
