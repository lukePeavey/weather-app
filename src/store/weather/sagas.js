import { takeEvery, put, call, all, select } from 'redux-saga/effects'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import upperFirst from 'lodash/upperFirst'
import api from '../../utils/api'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Handles fetching weather data for a single location.
 *
 * The weather state stores three types of data for each location: current
 * conditions, daily forecast (10 days), and hourly forecast (10 days). Each
 * type of weather data corresponds to an API endpoint. The fetchWeather action
 * takes a location and an array of endpoints to fetch as the payload.
 *
 * @param {Object} payload.place - a place object containing location coordinates
 * @param {array} payload.endpoints - weather endpoints to fetch ['current', 'days', 'hours']
 */
function* fetchWeather({ payload: { place, endpoints } }) {
  try {
    const placeid = get(place, 'place_id') || 'auto'
    const coords = place ? `${place.location.lat},${place.location.lng}` : 'autoip'

    // Endpoints to include in the request
    let requestEndpoints = []
    for (let endpoint of endpoints) {
      // Check the state to see if already has data for this endpoint
      let cachedWeatherData = yield select(fromState[`getForecast${upperFirst(endpoint)}`], placeid)
      if (isEmpty(cachedWeatherData)) requestEndpoints.push(endpoint)
    }

    const data = requestEndpoints.length
      ? yield call(api.get, '/weather', {
          place: coords,
          endpoints: requestEndpoints.join(',')
        })
      : null

    yield put(actions.fetchWeatherSuccess(data, placeid))
  } catch (error) {
    yield put(actions.fetchWeatherFail(error.message))
  }
}

export default function* watcherSaga() {
  yield all([takeEvery(types.FETCH_WEATHER_REQUEST, fetchWeather)])
}
