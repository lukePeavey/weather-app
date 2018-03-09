import { takeLatest, put, call, all } from 'redux-saga/effects'
import api from '../../utils/api'
import * as actions from './actions'
import * as types from './constants'

/**
 * Worker saga that handles fetching autocomplete suggestions for the
 * search bar. This feature is powered by the Google Places API
 * @todo - Throttle autocomplete requests
 */
function* fetchSearchSuggestions({ payload: { input } }) {
  try {
    const params = { input, types: '(regions)' }
    const suggestions = yield call(api.get, '/places/autocomplete', params)
    yield put(actions.fetchSearchSuggestionsSuccess(suggestions))
  } catch (error) {
    yield put(actions.fetchSearchSuggestionsFail())
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }
}

/** Watches for the specified actions and runs corresponding worker sagas */
export default function* watcherSaga() {
  yield all([takeLatest(types.FETCH_SEARCH_SUGGESTIONS_REQUEST, fetchSearchSuggestions)])
}
