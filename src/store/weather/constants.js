const MODULE_NAMESPACE = 'weather'
const type = actionName => `${MODULE_NAMESPACE}/${actionName}`

export const FETCH_WEATHER_REQUEST = type('FETCH_WEATHER_REQUEST')
export const FETCH_WEATHER_SUCCESS = type('FETCH_WEATHER_SUCCESS')
export const FETCH_WEATHER_FAIL = type('FETCH_WEATHER_FAIL')
