import * as types from './constants'

/** Fetch weather data for a single location */
export const fetchWeatherRequest = (place = {}, endpoints = []) => ({
  type: types.FETCH_WEATHER_REQUEST,
  payload: { place, endpoints }
})

export const fetchWeatherSuccess = (data, placeid) => ({
  type: types.FETCH_WEATHER_SUCCESS,
  payload: { data, placeid }
})

export const fetchWeatherFail = error => ({
  type: types.FETCH_WEATHER_FAIL,
  payload: { error }
})
