export const CHANGE_VALUE = 'CHANGE_VALUE'
export const INPUT_PRESS = 'INPUT_PRESS'

export function inputSearchSetValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: value,
  }
}

export function inputSearchPress() {
  return {
    type: INPUT_PRESS,
  }
}
