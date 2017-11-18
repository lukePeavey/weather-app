import React from 'react'
import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SubmissionError } from 'redux-form'
import api from '../../utils/api'
import get from 'lodash/get'
import toPairs from 'lodash/toPairs'
import fromPairs from 'lodash/fromPairs'
import isEmpty from 'lodash/isEmpty'
import values from 'lodash/values'
import Button from 'material-ui/Button'
import * as weatherActions from '../weather/actions'
import * as notifications from '../notifications/actions'
import * as actions from './actions'
import * as types from './constants'
import * as fromState from '../selectors'

export function* fetchPlaceDetails(placeid) {
  try {
    let place = yield select(fromState.getPlace, placeid)
    if (!place) {
      yield put(actions.fetchPlaceDetailsRequest(placeid))
      place = yield call(api.get, '/places/details', { placeid })
      yield put(actions.fetchPlaceDetailsSuccess(place))
    }
  } catch (error) {
    console.group('Fetch Place Details')
    console.error(error)
    console.groupEnd()
  }
}
/**
 * Handles the process of selecting the location for which to show weather.
 *
 * This process can be initiated by selecting a location via the searchbar
 * or saved locations dropdown. There are three steps to this process:
 * 1. set activePlaceId to the selected location
 * 2. Fetch the place details (from Google Places API) including coordinates
 * which are required to get weather data. Depending on how the location
 * was selected (ie searchbar vs saved locations) the place details might
 * already be stored in state, so the saga will check there first.
 * 3. Once step 2 is complete, dispatch an action to fetch weather data for
 * the selected location, passing the the place details as payload. Fetching
 * the weather data is handled in a separate saga in the weather module.
 */
function* selectLocation({ payload: { placeid } }) {
  yield put(actions.setActivePlaceId(placeid))
  try {
    const place = yield fetchPlaceDetails(placeid)
    const notification = {
      message: <span>Add to saved locations?</span>,
      action: (
        <Button color="accent" onClick={e => console.log(placeid)}>
          Save
        </Button>
      )
    }
    yield put(notifications.addNotification(notification))
  } catch (error) {
    yield put({ type: 'SELECT_LOCATION_FAILED' })
  }
}

/** Watches for the specified actions and runs corresponding worker sagas */
export default function* watcherSaga() {
  yield all([takeLatest(types.SELECT_LOCATION, selectLocation)])
}
