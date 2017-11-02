import * as types from './constants'

export const setWeatherView = index => ({
  type: types.SET_WEATHER_VIEW,
  payload: { index }
})
/** Fetch weather data for a single location */
export const fetchWeatherRequest = place => ({
  type: types.FETCH_WEATHER_REQUEST,
  payload: { place }
})

export const fetchWeatherSuccess = (weather, placeid) => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload: { weather, placeid }
})

export const fetchWeatherFail = error => ({
  type: types.FETCH_WEATHER_FAIL,
  payload: { error }
})

/** Fetch hourly forecast data for a single location */
export const fetchHourlyForecastRequest = place => ({
  type: types.FETCH_HOURLY_FORECAST_REQUEST,
  payload: { place }
})

export const fetchHourlyForecastSuccess = (weather, placeid) => ({
  type: types.FETCH_HOURLY_FORECAST_SUCCESS,
  payload: { weather, placeid }
})

export const fetchHourlyForecastFail = error => ({
  type: types.FETCH_HOURLY_FORECAST_FAIL,
  payload: { error }
})

/** Fetch weather data for the user's saved location's */
export const fetchWeatherForSavedPlacesRequest = places => ({
  type: types.WEATHER_FOR_SAVED_PLACES_REQUEST,
  payload: { places }
})
export const fetchWeatherForSavedPlacesSuccess = places => ({
  type: types.WEATHER_FOR_SAVED_PLACES_SUCCESS
})
export const fetchWeatherForSavedPlacesFail = places => ({
  type: types.WEATHER_FOR_SAVED_PLACES_FAIL
})

/** Fetch weather data for the currently displayed location */
export const fetchWeatherForActivePlaceRequest = place => ({
  type: types.WEATHER_FOR_ACTIVE_PLACE_REQUEST,
  payload: { place }
})
export const fetchWeatherForActivePlaceSuccess = () => ({
  type: types.WEATHER_FOR_ACTIVE_PLACE_SUCCESS
})
export const fetchWeatherForActivePlaceFail = () => ({
  type: types.WEATHER_FOR_ACTIVE_PLACE_FAIL
})
