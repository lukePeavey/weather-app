import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import { get, values, fromPairs } from 'lodash'

import api from '../../utils/api'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Handles fetching current weather
 */
function* fetchCurrentWeather({ payload: { placeid } }) {
  try {
    let weather = yield call(api.get, `/weather/current/${placeid}`)
    yield put(actions.fetchCurrentWeatherSuccess(weather, placeid))
  } catch (error) {
    yield put(actions.fetchCurrentWeatherFail())
  }
}

/**
 * Handles fetching current weather for the user's saved locations
 */
function* fetchWeatherForSavedPlaces({ payload: { places } }) {
  try {
    // Fetch the current weather conditions for each of the user's saved places.
    // This yields an array of current weather objects
    let weather = yield all(
      places.map(({ location: { lat, lng } }) => call(api.get, `/weather/current/${lat},${lng}`))
    )
    // Convert the array of weather objects to an array of key-value pairs,
    // where each key is the placeid and the value is the object with the weather
    // conditions for that location. The weather for these locations will be
    // added to the redux store.
    let weatherObject = fromPairs(weather.map((weather, i) => [places[i].place_id, weather]))
    yield put(actions.fetchWeatherForSavedPlacesSuccess(weatherObject))
  } catch (error) {
    yield put(actions.fetchWeatherForSavedPlacesFail())
  }
}

// @todo add saga to handle fetching daily forecast

// @todo add saga to handle fetching hourly forecast

export default function* watcherSaga() {
  yield all([takeEvery(types.FETCH_CURRENT_WEATHER_REQUEST, fetchCurrentWeather)])
  yield all([takeEvery(types.FETCH_WEATHER_FOR_SAVED_PLACES_REQUEST, fetchWeatherForSavedPlaces)])
}
