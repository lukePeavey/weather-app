import { takeEvery, takeLatest, put, call, all, select, delay } from 'redux-saga/effects'
import get from 'lodash/get'
import toPairs from 'lodash/toPairs'
import isEmpty from 'lodash/isEmpty'
import values from 'lodash/values'
import api from '../../utils/api'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Fetches weather data for a single location and stores it in state.
 * See weather reducer for details on how weather data is stored. This
 * saga is used internally to fetch weather for the active location and
 * the user's saved locations.
 *
 * @param {Object} place - a place object returned by Google Places API
 */
function* fetchWeather(place) {
  const placeid = get(place, 'place_id', '')
  const coords = place ? values(place.location).join(',') : 'auto'
  let params = {}
  try {
    if (isEmpty(yield select(fromState.getCurrentWeather, placeid))) {
      yield put(actions.fetchWeatherRequest())
      // Fetch current weather and daily forecast first
      params = { features: 'conditions,forecast10day', place: coords }
      const { current, days } = yield call(api.get, '/weather', params)
      yield put(actions.fetchWeatherSuccess({ current, days }, placeid))
      // Once initial weather has been fetched and added to the state,
      // fetch the hourly weather forecast data.
      yield put(actions.fetchHourlyForecastRequest())
      params = { features: 'hourly10day', place: coords }
      const { hours } = yield call(api.get, '/weather', params)
      yield put(actions.fetchHourlyForecastSuccess({ hours }, placeid))
    }
  } catch (error) {
    yield put(actions.fetchWeatherFail)
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }
}

/**
 * Fetches complete weather data for the user's saved locations. This
 * is used to display current temp/weather icon for saved locations
 * in the locations dropdown (PlacesMenu). It will also be used to
 * display the weather for those locations when selected
 *
 * @param {Object} payload
 * @param {Array} payload.places - an array of place objects (Google Places API)
 */
function* weatherForSavedPlaces({ payload: { places } }) {
  try {
    yield all(places.map(place => call(fetchWeather, place)))
    yield put({ type: types.WEATHER_FOR_SAVED_PLACES_SUCCESS })
  } catch (error) {
    yield put({ type: types.WEATHER_FOR_SAVED_PLACES_FAIL })
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }
}

/**
 * Fetch complete weather data for the currently active location.
 *
 * @param {Object} payload
 * @param {Object} place a place object from the Google Places API
 */
function* weatherForActivePlace({ payload: { place } }) {
  try {
    yield call(fetchWeather, place)
    yield put({ type: types.WEATHER_FOR_ACTIVE_PLACE_SUCCESS })
  } catch (error) {
    yield put({ type: types.WEATHER_FOR_ACTIVE_PLACE_FAIL })
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }
}

export default function* watcherSaga() {
  yield all([
    takeLatest(types.WEATHER_FOR_ACTIVE_PLACE_REQUEST, weatherForActivePlace),
    takeLatest(types.WEATHER_FOR_SAVED_PLACES_REQUEST, weatherForSavedPlaces)
  ])
}
