import * as types from './constants'

/** Login actions */
export const loginRequest = ({ credentials, resolve, reject }) => ({
  type: types.LOGIN_REQUEST,
  payload: { credentials, resolve, reject }
})

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  payload: { token }
})

export const loginFail = error => ({
  type: types.LOGIN_FAIL,
  payload: { errors: error }
})

/** Logout action */
export const logoutRequest = () => ({
  type: types.LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
})

export const logoutFail = error => ({
  type: types.LOGOUT_FAIL,
  payload: { error }
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
