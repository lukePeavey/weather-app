import {
  take,
  put,
  call,
  fork,
  cancel,
  cancelled,
  all,
  select,
  takeLatest
} from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import api from '../../utils/api'
import get from 'lodash/get'
import * as fromState from '../selectors'
import * as notificationActions from '../notifications/actions'
import * as actions from './actions'
import * as types from './constants'

/**
 * Handles the authentication process.
 * @param {Object} credentials - username and password
 * @param {Function} resolve - resolves the onSubmit handler for login form
 * @param {Function} reject - rejects the onsubmit handler for login form
 */
function* authenticate({ credentials, resolve, reject }) {
  try {
    const { token, user } = yield call(api.post, '/auth/login', credentials)
    yield put(actions.loginSuccess({ token, user }))
    resolve()
    // dispatch a UI notification to let the user know they logged in successfully
    yield put(notificationActions.addNotification({ message: 'You are logged in.' }))
    return token
  } catch (error) {
    yield put(actions.loginFail())
    reject(
      new SubmissionError({
        _error: 'Incorrect username or password'
      })
    )
  } finally {
    if (yield cancelled()) {
      // handle canceled action
    }
  }
}

/**
 * This is watcher saga that uses lower level methods like take and fork to
 * implement the login flow. It handles the entire cycle of login -> logout
 * in a single function. Its loosely based on an example from saga's official
 * documentation.
 */
function* loginFlow() {
  while (true) {
    // 1. Wait for the LOGIN_REQUEST or FETCH_USER_SUCCESS actions to be
    // dispatched. If the user is already logged in when the app loads, for
    // example after refreshing the page, the LOGIN_REQUEST action wont be
    // dispatched in that life cycle (because user is already logged in). in
    // that case, FETCH_USER_SUCCESS will be dispatched when the authenticated
    // user has been fetched from server.
    const loginAction = yield take([types.LOGIN_REQUEST, types.FETCH_USER_SUCCESS])
    let task = null

    if (loginAction.type === types.LOGIN_REQUEST) {
      // 2. When LOGIN_REQUEST is dispatched, run the authenticate task to handle
      // the login process. The `fork` method is non-blocking, so the loginFlow
      // saga will continue to execute while the authenticate task is running.
      task = yield fork(authenticate, loginAction.payload)
    }

    // 3. Wait for LOGIN_FAIL or LOGOUT actions to be dispatched.
    const logoutAction = yield take([types.LOGIN_FAIL, types.LOGOUT])

    if (task && logoutAction.type === types.LOGOUT) {
      // If the user attempted to log out while the authenticate task was still running,
      // cancel it. (ie if user logged in, then tried to logout before the login process
      // was complete. this is unlikely, but possible)
      yield cancel(task)
    }

    // 4. Make an api request to log the user out. (this has no effect if the user is not
    // currently logged in)
    yield call(api.post, '/auth/logout')

    if (logoutAction.type === types.LOGOUT) {
      // When the user logs out, dispatch a UI notification to indicate successful logout
      yield put(notificationActions.addNotification({ message: 'You are logged out.' }))
    }
  }
}

/**
 * Worker saga for the signup process. Works the same way as the login saga,
 * its triggered from the signup form and receives resolve/reject callbacks
 * from the form's onSubmit method.
 * @param {Object} payload
 * @param {Object} payload.data - data from the signup form
 * @param {Function} payload.resolve = resolves the signup form's onSubmit method
 * @param {Function} payload.reject = rejects the signup form's onSubmit method
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
 * Fetches the authenticated user from the database
 */
function* fetchUser() {
  try {
    let user = yield select(fromState.getAuthenticatedUser)
    if (!user) user = yield call(api.get, '/user')
    yield put(actions.fetchUserSuccess(user))
  } catch (error) {
    yield put(actions.fetchUserFail())
  }
}

/** Watches for the specified actions and runs the corresponding sagas */
export default function* watcherSaga() {
  yield all([
    loginFlow(),
    takeLatest(types.SIGNUP_REQUEST, signup),
    takeLatest(types.FETCH_USER_REQUEST, fetchUser)
  ])
}
