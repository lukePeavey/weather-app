import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SubmissionError } from 'redux-form'
import api from '../../utils/api'
import get from 'lodash/get'
import toPairs from 'lodash/toPairs'
import fromPairs from 'lodash/fromPairs'
import isEmpty from 'lodash/isEmpty'
import values from 'lodash/values'
import * as weatherActions from '../weather/actions'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

/**
 * Handles the process of selecting the location for which to show weather.
 *
 * This process can be initiated by selecting a location via the searchbar
 * or saved locations dropdown. There are three steps to this process:
 * 1. set activePlaceId to the selected location
 * 2. Fetch the place details (from Google Places API) inlcuding coordinates
 * which are required to get weather data. Depending on how the location
 * was selected (ie searchbar vs saved lcoations) the place details might
 * already be stored in state, so the saga will check there first.
 * 3. Once step 2 is complete, dispatch an action to fetch weather data for
 * the selected location, passing the the place details as payload. Fetching
 * the weather data is handled in a separate saga in the weather module.
 */
function* selectLocation({ payload: { placeid, name = '' } }) {
  yield put(actions.setActivePlace(placeid))
  try {
    let place = yield select(fromState.getPlace, placeid)
    if (!place) {
      yield put(actions.fetchPlaceDetailsRequest(placeid, name))
      place = yield call(api.get, '/places/details', { placeid })
      yield put(actions.fetchPlaceDetailsSuccess(place))
      yield put(weatherActions.fetchWeatherForActivePlaceRequest(place))
    }
  } catch (error) {
    yield put(() => ({ type: 'SELECT_LOCATION_FAILED' }))
  }
}

/**
 * Worker saga that handles fetching autocomplete suggestions for the places
 * search bar. This feature is powered by the Google Places API
 * @todo - Throttle autocomplete requests
 */
function* fetchSearchSuggestions({ payload: { input } }) {
  try {
    const params = { input, types: '(regions)' }
    const suggestions = yield call(api.get, '/places/autocomplete', params)
    yield put(actions.fetchSearchSuggestionsSuccess(suggestions))
  } catch (error) {
    yield put(actions.fetchSearchSuggestionsFail('No matching results found'))
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
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
    // Next, dispatch the WEATHER_FOR_SAVED_PLACES action, this handles
    // fetching weather data for the user's saved locations (see weather sagas).
    yield put(weatherActions.fetchWeatherForSavedPlacesRequest(places))

    // Dispatch FETCH_SAVED_PLACES_SUCCESS which will save the places
    const placesObject = fromPairs(places.map(place => [place.place_id, place]))
    yield put(actions.fetchSavedPlacesSuccess(placesObject))
  } catch (error) {
    yield put(actions.fetchSavedPlacesFail())
    // Log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
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
    takeLatest(types.REMOVE_SAVED_PLACE_REQUEST, removeSavedPlace),
    takeLatest(types.SELECT_LOCATION, selectLocation)
  ])
}
