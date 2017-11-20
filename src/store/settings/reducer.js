import * as types from './constants'

const initialState = {
  unit: 'fahrenheit',
  enableAlerts: false
}

export const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_SETTINGS_SUCCESS:
      return { ...payload.settings }

    case types.CHANGE_SETTING:
      return {
        ...state,
        [payload.name]: payload.value
      }

    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}
