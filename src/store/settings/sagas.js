import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import api from '../../utils/api'

import * as types from './constants'
import * as actions from './actions'
import * as fromState from '../selectors'

/**
 * Attempt to save settings to database after they are updated.
 * If the user is not logged in, settings will be updated in redux
 * state but not saved to the database
 */
function* saveSettings({ payload: { name, value } }) {
  try {
    const settings = yield select(fromState.getSettings)
    if (settings) {
      // Only save settings if user is logged in.
      const updated = { ...settings, [name]: value }
      console.log(updated)
      yield put(actions.saveSettingsRequest())
      const { status } = yield call(api.post, '/user/settings', { settings: updated })
      if (status === 'OK') {
        yield put(actions.saveSettingsSuccess())
      } else {
        throw new Error('bad stuff')
      }
    }
  } catch (error) {
    yield put(actions.saveSettingsFail())
  }
}

/**
 * Fetch the user's saved settings (if logged in)
 */
function* fetchSettings() {
  const user = yield select(fromState.getAuthenticatedUser)
  if (user) {
    yield put(actions.fetchSettingsSuccess(user.settings))
  }
}

export default function* watcherSaga() {
  yield all([
    takeLatest(types.CHANGE_SETTING, saveSettings),
    takeLatest(types.FETCH_SETTINGS_REQUEST, fetchSettings)
  ])
}
