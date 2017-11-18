import { takeEvery, takeLatest, put, call, all, select, delay } from 'redux-saga/effects'
import get from 'lodash/get'
import toPairs from 'lodash/toPairs'
import isEmpty from 'lodash/isEmpty'
import values from 'lodash/values'
import api from '../../utils/api'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

function* fetchCurrentWeather({ payload: { place } }) {
  const placeid = get(place, 'place_id', '')
  const coords = place ? `${place.location.lat},${place.location.lng}` : 'auto'
  const params = { place: coords }
  try {
    if (isEmpty(yield select(fromState.getCurrentWeather, placeid))) {
      const { current } = yield call(api.get, '/weather/current', params)
      yield put(actions.fetchCurrentWeatherSuccess(current, placeid))
    }
  } catch (error) {
    yield put(actions.fetchCurrentWeatherFail(error.message))
  }
}

function* fetchDailyForecast({ payload: { place } }) {
  const placeid = get(place, 'place_id', '')
  const coords = place ? `${place.location.lat},${place.location.lng}` : 'auto'
  const params = { place: coords }
  try {
    if (isEmpty(yield select(fromState.getCurrentWeather, placeid))) {
      const { days } = yield call(api.get, '/weather/days', params)
      yield put(actions.fetchDailyForecastSuccess(days, placeid))
    }
  } catch (error) {
    yield put(actions.fetchDailyForecastFail(error.message))
  }
}

function* fetchHourlyForecast({ payload: { place } }) {
  const placeid = get(place, 'place_id', '')
  const coords = place ? values(place.location).join(',') : 'auto'
  const params = { place: coords }
  try {
    if (isEmpty(yield select(fromState.getCurrentWeather, placeid))) {
      const { hours } = yield call(api.get, '/weather/hours', params)
      yield put(actions.fetchHourlyForecastSuccess(hours, placeid))
    }
  } catch (error) {
    yield put(actions.fetchHourlyForecastFail(error.message))
  }
}

export default function* watcherSaga() {
  yield all([
    takeEvery(types.FETCH_CURRENT_WEATHER_REQUEST, fetchCurrentWeather),
    takeEvery(types.FETCH_DAILY_FORECAST_REQUEST, fetchDailyForecast),
    takeEvery(types.FETCH_HOURLY_FORECAST_REQUEST, fetchHourlyForecast)
  ])
}
