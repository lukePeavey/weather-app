import * as types from './constants'

/** Login actions */
export const loginRequest = ({ credentials, resolve, reject }) => ({
  type: types.LOGIN_REQUEST,
  payload: { credentials, resolve, reject }
})

export const loginSuccess = ({ token, user }) => ({
  type: types.LOGIN_SUCCESS,
  payload: { token, user }
})

export const loginFail = error => ({
  type: types.LOGIN_FAIL,
  payload: { errors: error }
})

/** Logout action */
export const logout = () => ({
  type: types.LOGOUT
})

/** Signup actions */
export const signupRequest = ({ data, resolve, reject }) => ({
  type: types.SIGNUP_REQUEST,
  payload: { data, resolve, reject }
})

export const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS
})

export const signupFail = error => ({
  type: types.SIGNUP_FAIL,
  payload: { error }
})

/** Fetch authenticated user actions */
export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST
})

export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  payload: { user }
})

export const fetchUserFail = error => ({
  type: types.FETCH_USER_FAIL,
  payload: { error }
})
