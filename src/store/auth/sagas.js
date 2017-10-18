import { takeEvery, takeLatest, put, call, all, select } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import api from '../../utils/api'
import { get } from 'lodash'
import { fetchSavedPlacesRequest } from '../places/actions'
import * as fromState from '../selectors'
import * as actions from './actions'
import * as types from './constants'

/**
 * Worker saga to handle the login process. This action is dispatched when
 * the login form is submitted. The payload includes resolve/reject
 * callbacks for the login form's onSubmit method. Calling these functions will
 * determine whether the form is successfully submitted. Any error(s) can be
 * passed to the reject callback and they will be displayed as a submission
 * error on the form.
 * @see https://redux-form.com/6.7.0/examples/submitvalidation/
 *
 * @param data - the data from the login form
 * @param {function} resolve - resolves the login form's onSubmit method
 * @param {function} reject - rejects the login form's onSubmit method
 */
function* login({ payload: { credentials, resolve, reject } }) {
  try {
    const { user, token } = yield call(api.post, '/auth/login', credentials)
    yield put(actions.fetchUserRequest(user))
    resolve(yield put(actions.loginSuccess(token)))
  } catch (error) {
    yield put(actions.loginFail())
    reject(
      new SubmissionError({
        _error: 'Login Failed'
      })
    )
  }
}

/**
 * Worker saga for the signup process. Works the same way as the login saga,
 * its triggered from the signup form and receives resolve/reject callbacks
 * from the form's onSubmit method.
 *
 * @param {Object} data - data from the signup form
 * @param {Function} resolve = resolves the signup form's onSubmit method
 * @param {Function} reject = rejects the signup form's onSubmit method
 */
function* signup({ payload: { data, resolve, reject } }) {
  try {
    const response = yield call(api.post, '/auth/register', data)
    resolve(yield put(actions.signupSuccess()))
  } catch (error) {
    yield put(actions.signupFail())
    reject(
      new SubmissionError({
        _error: error.status && error.status !== 500 ? error.message : 'Registration failed'
      })
    )
  }
}

/**
 * Handles the logout process.
 * @todo - needs additional work
 */
function* logout() {
  try {
    yield call(api.post, '/auth/logout', {})
    yield put(actions.logoutSuccess())
  } catch (error) {
    yield put(actions.logoutFail())
  }
}

/**
 * Fetches the authenticated user from the database
 */
function* fetchUser() {
  try {
    let user = yield select(fromState.getAuthenticatedUser)
    if (!user) user = yield call(api.get, '/user')
    yield put(actions.fetchUserSuccess(user))
    yield put(fetchSavedPlacesRequest())
  } catch (error) {
    yield put(actions.fetchUserFail())
  }
}

/** Watches for the specified actions and runs the corresponding sagas */
export default function* watcherSaga() {
  yield all([
    takeLatest(types.SIGNUP_REQUEST, signup),
    takeLatest(types.LOGIN_REQUEST, login),
    takeLatest(types.LOGOUT_REQUEST, logout),
    takeEvery(types.FETCH_USER_REQUEST, fetchUser)
  ])
}
