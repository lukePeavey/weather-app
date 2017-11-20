import get from 'lodash/get'

/** Get the current weather data for a single location from state. Defaults to currently active location  */
export const getCurrentWeather = (state, placeid = get(state, 'places.activePlaceId', 'auto')) => {
  return get(state, `weather.current.${placeid}.conditions`)
}

/** Get the 10 day forecast data for the currently active location. */
export const getForecastDays = state => {
  const placeid = get(state, 'places.activePlaceId', 'auto')
  return get(state, `weather.forecastDays.${placeid}`, null)
}

/** Get a single day from the 10 day forecast for the currently active location.  */
export const getForecastDayByIndex = (state, index) => {
  const forecastDays = getForecastDays()
  return forecastDays ? forecastDays[1] : null
}

/** Get the hourly forecast data for the currently active location  */
export const getForecastHours = state => {
  const placeid = get(state, 'places.activePlaceId', 'auto')
  return get(state, `weather.forecastHours.${placeid}`, null)
}
