import * as types from './constants'

export const setWeatherView = index => ({
  type: types.SET_WEATHER_VIEW,
  payload: { index }
})
/** Fetch weather data for a single location */
export const fetchCurrentWeatherRequest = place => ({
  type: types.FETCH_CURRENT_WEATHER_REQUEST,
  payload: { place }
})

export const fetchCurrentWeatherSuccess = (weather, placeid) => ({
  type: types.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: { weather, placeid }
})

export const fetchCurrentWeatherFail = error => ({
  type: types.FETCH_CURRENT_WEATHER_FAIL,
  payload: { error }
})

/** Fetch weather data for a single location */
export const fetchDailyForecastRequest = place => ({
  type: types.FETCH_DAILY_FORECAST_REQUEST,
  payload: { place }
})

export const fetchDailyForecastSuccess = (weather, placeid) => ({
  type: types.FETCH_DAILY_FORECAST_SUCCESS,
  payload: { weather, placeid }
})

export const fetchDailyForecastFail = error => ({
  type: types.FETCH_DAILY_FORECAST_FAIL,
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
