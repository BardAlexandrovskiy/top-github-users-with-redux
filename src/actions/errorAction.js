export const ALERT_ERROR = 'ALERT_ERROR'
export const HIDE_ERROR = 'HIDE_ERROR'

export function alertError() {
  return {
    type: ALERT_ERROR,
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR,
  }
}
