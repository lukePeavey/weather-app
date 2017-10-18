import * as types from './constants'

const initialState = {
  /** Currently the only setting is for unit, could add more later */
  settings: {
    unit: 'fahrenheit'
  }
}

export const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_SETTINGS_SUCCESS:
      return { ...payload.settings }

    case types.UPDATE_SETTING_SUCCESS:
      return {
        ...state,
        [payload.name]: payload.value
      }

    default:
      return state
  }
}
