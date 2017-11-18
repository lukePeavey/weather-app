import get from 'lodash/get'

export const getSettings = state => {
  return state.settings
}

export const getUnit = state => {
  return get(state, 'settings.unit', 'fahrenheit')
}
