import get from 'lodash/get'

/** Get the current weather data for a single location from state. Defaults to currently active location  */
export const getCurrentWeatherIcon = state => {
  const placeid = get(state, 'places.activePlaceId')
  return get(state, `weather.current.${placeid}.icon`, null)
}
/** Get the current weather data for a single location from state. Defaults to currently active location  */
export const getForecastCurrent = (state, placeid = state.places.activePlaceId) => {
  return get(state, `weather.current.${placeid}`, null)
}

/** Get the 10 day forecast data for the currently active location. */
export const getForecastDays = state => {
  const placeid = get(state, 'places.activePlaceId')
  return get(state, `weather.days.${placeid}`, null)
}

/** Get the hourly forecast data for the currently active location  */
export const getForecastHours = state => {
  const placeid = get(state, 'places.activePlaceId', 'auto')
  return get(state, `weather.hours.${placeid}`, null)
}

/** Get a single day from the 10 day forecast for the currently active location.  */
export const getForecastDayByIndex = (state, index) => {
  const forecastDays = getForecastDays()
  return forecastDays ? forecastDays[1] : null
}
