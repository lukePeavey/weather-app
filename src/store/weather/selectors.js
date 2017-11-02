import { get, isEmpty, values } from 'lodash'

export const getCurrentWeatherIcon = (state, placeid) => {
  return get(state, `weather.current.${placeid}.conditions.icon`, '')
}

export const getCurrentWeather = (state, placeid = get(state, 'places.activePlaceId', 'auto')) => {
  return get(state, `weather.current.${placeid}.conditions`)
}

export const getForecastDays = (state, placeid = get(state, 'places.activePlaceId', 'auto')) => {
  return get(state, `weather.forecastDays.${placeid}`, null)
}

export const getForecastHours = (state, placeid = get(state, 'places.activePlaceId', 'auto')) => {
  return get(state, `weather.forecastHours.${placeid}`, null)
}

export const getWeatherViews = state => {
  return get(state, 'weather.views')
}

export const getActiveView = state => {
  return get(state, 'weather.activeView')
}
