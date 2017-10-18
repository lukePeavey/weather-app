import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import api from '../../utils/api'
import { get, values } from 'lodash'

import { fetchWeatherForSavedPlacesRequest } from '../weather/actions'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Worker saga that handles fetching autocomplete suggestions for the places
 * search bar. This feature is powered by the Google Places API
 * @todo - Throttle autocomplete requests
 */
function* fetchSearchSuggestions({ payload: { input } }) {
  try {
    const params = { input, types: '(regions)' }
    const suggestions = input ? yield call(api.get, '/places/autocomplete', params) : []
    yield put(actions.fetchSearchSuggestionsSuccess(suggestions))
  } catch (error) {
    yield put(actions.fetchSearchSuggestionsFail())
  }
}

/**
 * Worker saga that handles fetching the users saved locations.
 */
function* fetchSavedPlaces() {
  try {
    // Get the authenticated user from state, the user object contains
    // an array of the users saved locations (as an array of place ids).
    const user = yield select(fromState.getAuthenticatedUser)

    // Map the array of ids to an array of API calls to fetch the place
    // details (from Google Place API). By passing the array of calls into
    // all(), saga will run them in parallel, yielding the result when all
    // of the requests have completed.
    const places = yield all(
      user.places.map(placeid => {
        return call(api.get, '/places/details', { placeid })
      })
    )
    // Next, dispatch the fetchWeatherForSavedPlaces action, passing it the
    // array of places returned by the previous step. This will fetch current
    // weather conditions for each of the saved locations (see redux weather
    // for details). The places menu displays the current temp and weather
    // icons for each of the saved locations.
    yield put(fetchWeatherForSavedPlacesRequest(places))
    yield put(actions.fetchSavedPlacesSuccess(places))
  } catch (error) {
    yield put(actions.fetchSavedPlacesFail())
  }
}

/**
 * Worker saga that handles adding a new saved location for the current
 * user.
 */
function* addSavedPlace({ payload: { placeid } }) {
  try {
    yield call(api.post, '/user/places', { placeid })
    yield put(actions.addSavedPlaceSuccess())
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

/** Watches for the specified actions and runs corresponding worker sagas */
export default function* watcherSaga() {
  yield all([
    takeLatest(types.FETCH_SEARCH_SUGGESTIONS_REQUEST, fetchSearchSuggestions),
    takeLatest(types.FETCH_SAVED_PLACES_REQUEST, fetchSavedPlaces),
    takeLatest(types.ADD_SAVED_PLACE_REQUEST, addSavedPlace),
    takeLatest(types.REMOVE_SAVED_PLACE_REQUEST, removeSavedPlace)
  ])
}
