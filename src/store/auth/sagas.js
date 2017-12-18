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
import * as fromState from '../selectors'
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
    return resolve('Success')
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
 * This is a watcher saga that handles the login flow. It uses saga's lower-
 * level methods `take` and `fork`. (adaped from an example in saga's docs)
 *
 * NOTE: Because the app uses token based authentication, the user might already
 * be logged in when they launch the app. So step 1 listens for two actions:
 * LOGIN_REQUEST (dispatched when login form is submitted) or FETCH_USER_SUCCESS
 * (dispatched when the authenticated user has been retrieved form database).
 */
function* loginFlow() {
  while (true) {
    // 1. Wait for user to login
    const loginAction = yield take([types.LOGIN_REQUEST, types.FETCH_USER_SUCCESS])
    let authenticationTask = null

    // If LOGIN_REQUEST was dispatched, run the authenticate task in a separate thread.
    if (loginAction.type === types.LOGIN_REQUEST) {
      authenticationTask = yield fork(authenticate, loginAction.payload)
    }

    // 2. Wait for user to logout, or the login attempt to fail
    yield take([types.LOGIN_FAIL, types.LOGOUT])

    // If the authentication task in still in progress cancel it
    if (authenticationTask) yield cancel(authenticationTask)

    // Finally, make API call to log the user out on the back end
    yield call(api.post, '/auth/logout')
  }
}

/**
 * Worker saga to handle the signup process.
 * its triggered from the signup form and receives resolve/reject callbacks
 * from the form's onSubmit method.
 * @param {Object} payload
 * @param {Object} payload.data - data from the signup form
 * @param {Function} payload.resolve = resolves the signup form's onSubmit method
 * @param {Function} payload.reject = rejects the signup form's onSubmit method
 */
function* signup({ payload: { data, resolve, reject } }) {
  try {
    yield call(api.post, '/auth/register', data)
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
