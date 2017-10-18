import { get, isEmpty } from 'lodash'

/* Authentication selectors
-----------------------------------------------*/
export const getAuthenticatedUser = state => state.auth.user || null

/* Weather selectors
-----------------------------------------------*/
export const getCurrentWeatherIcon = (state, placeid) => {
  return get(state, `weather.current.${placeid}.conditions.icon`, '')
}

export const getCurrentWeather = (state, placeid = 'auto') => {
  get(state, `weather.current.${placeid}.conditions`, null)
}

export const getForecastDays = (state, placeid = 'auto') => {
  get(state, `weather.forecastDays.${placeid}`, null)
}

/* Places selectors
-----------------------------------------------*/
export const getSavedPlaces = state => {
  return get(state, 'places.savedPlaces', []).map(place => ({
    weather: get(state, `weather.current.${place.place_id}.conditions`, null),
    place
  }))
}

export const getCurrentPlace = state => {
  return get(state, 'places.currentPlace', '')
}

export const getSearchValue = state => {
  return get(state, 'places.searchValue', '')
}

export const getSearchSuggestions = state => {
  return get(state, 'places.searchSuggestions', [])
}

export const getActiveSearchSuggestion = state => {
  return get(state, 'places.activeSearchSuggestion', [])
}
