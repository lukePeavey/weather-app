import { takeLatest, put, call, all, select } from 'redux-saga/effects'
import api from '../../utils/api'
import * as actions from './actions'
import * as weatherAction from '../weather/actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Fetches details for a location from the API and stores them in the state
 */
export function* fetchPlaceDetails(placeid) {
  try {
    // Check to see if the location is already stored in state
    let place = yield select(fromState.getPlace, placeid)
    if (!place) {
      yield put(actions.fetchPlaceDetailsRequest(placeid))
      place = yield call(api.get, '/places/details', { placeid })
      yield put(actions.fetchPlaceDetailsSuccess(place))
    }
    return place
  } catch (error) {}
}
/**
 * Sets the active location for weather forecast
 *
 * This action can be triggered by selecting a location from the searchbar
 * or the saved locations dropdown. It involves several asynchronous actions
 * that must be performed sequentially. There are three steps:
 *
 * 1. Set `activePlaceId` to the selected location id.
 * 2. Fetch the place details from the API. This provides the geographic
 *    coordinates that will be used to get weather data for the selected place.
 * 3. Fetch weather data for the location using the coordinates from step 2.
 */
function* selectLocation({ payload: { placeid } }) {
  yield put(actions.setActivePlaceId(placeid))
  try {
    const place = yield fetchPlaceDetails(placeid)
    if (place) {
      yield put(weatherAction.fetchWeatherRequest(place, ['current', 'days']))
    }
  } catch (error) {
    yield put({ type: 'SELECT_LOCATION_FAILED' })
  }
}

/** Watches for the specified actions and runs corresponding worker sagas */
export default function* watcherSaga() {
  yield all([takeLatest(types.SELECT_LOCATION, selectLocation)])
}
