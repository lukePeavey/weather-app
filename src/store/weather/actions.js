import * as types from './constants'

/** Fetch current weather for the specified location */
export const fetchCurrentWeatherRequest = placeid => ({
  type: types.FETCH_CURRENT_WEATHER_REQUEST,
  payload: { placeid }
})

export const fetchCurrentWeatherSuccess = (conditions, placeid) => ({
  type: types.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: { conditions, placeid }
})

export const fetchCurrentWeatherFail = error => ({
  type: types.FETCH_CURRENT_WEATHER_FAIL,
  payload: { error }
})

/** Fetch daily forecast for the specified location */
export const fetchDailyWeatherRequest = placeid => ({
  type: types.FETCH_CURRENT_WEATHER_REQUEST,
  payload: { placeid }
})

export const fetchDailyWeatherSuccess = days => ({
  type: types.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: { days }
})

export const fetchDailyWeatherFail = error => ({
  type: types.FETCH_CURRENT_WEATHER_FAIL,
  payload: { error }
})

/** Fetch hourly forecast for the specified location */
export const fetchHourlyWeatherRequest = placeid => ({
  type: types.FETCH_CURRENT_WEATHER_REQUEST,
  payload: { placeid }
})

export const fetchHourlyWeatherSuccess = hours => ({
  type: types.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: { hours }
})

export const fetchHourlyWeatherFail = error => ({
  type: types.FETCH_CURRENT_WEATHER_FAIL,
  payload: { error }
})

/** Fetch current weather for the user's saved locations */
export const fetchWeatherForSavedPlacesRequest = places => ({
  type: types.FETCH_WEATHER_FOR_SAVED_PLACES_REQUEST,
  payload: { places }
})

export const fetchWeatherForSavedPlacesSuccess = weather => ({
  type: types.FETCH_WEATHER_FOR_SAVED_PLACES_SUCCESS,
  payload: { weather }
})

export const fetchWeatherForSavedPlacesFail = error => ({
  type: types.FETCH_WEATHER_FOR_SAVED_PLACES_FAIL,
  payload: { error }
})
