import { takeEvery, put, call, all, select } from 'redux-saga/effects'
import api from '../../utils/api'
import * as types from './constants'
import * as actions from './actions'
import { fetchPlaceDetails } from '../places/sagas'
import * as fromState from '../selectors'

function* fetchSavedPlaces() {
  try {
    const places = yield call(api.get, '/user/places')
    if (places) {
      yield put(actions.fetchSavedPlacesSuccess(places.map(place => place.place_id)))
      yield all(places.map(place => call(fetchPlaceDetails, place.place_id)))
      // yield all(places.map(place => put(weatherActions.fetchCurrentWeatherRequest(place))))
    }
  } catch (error) {
    yield put(actions.fetchSavedPlacesFail())
  }
}

/**
 * Worker saga that handles adding a new saved location for the current
 * user.
 */
function* addSavedPlace() {
  try {
    const placeid = yield select(fromState.getActivePlaceId)
    const { place_id, location } = yield select(fromState.getPlace, placeid)
    if (place_id && location) {
      yield call(api.post, '/user/places', { place_id, location })
      yield put(actions.addSavedPlaceSuccess())
      yield call(fetchSavedPlaces)
    }
  } catch (error) {
    yield put(actions.addSavedPlaceFail())
  }
}

/**
 * Worker saga that handles removing a saved location for the current user.
 */
function* removeSavedPlace({ payload: { placeid } }) {
  try {
    yield call(api.delete, `/user/places/${placeid}`)
    yield put(actions.removeSavedPlaceSuccess())
  } catch (error) {
    yield put(actions.removeSavedPlaceFail())
  }
}

export default function* watcherSaga() {
  yield all([
    takeEvery(types.FETCH_SAVED_PLACES_REQUEST, fetchSavedPlaces),
    takeEvery(types.ADD_SAVED_PLACE_REQUEST, addSavedPlace),
    takeEvery(types.REMOVE_SAVED_PLACE_REQUEST, removeSavedPlace)
  ])
}
