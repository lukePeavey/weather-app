const MODULE_NAMESPACE = 'auth'
const type = actionName => `${MODULE_NAMESPACE}/${actionName}`

// Login actions
export const LOGIN_REQUEST = type('LOGIN_REQUEST')
export const LOGIN_SUCCESS = type('LOGIN_SUCCESS')
export const LOGIN_FAIL = type('LOGIN_FAIL')

// Logout
export const LOGOUT = 'LOGOUT'

// Registration actions
export const SIGNUP_REQUEST = type('SIGNUP_REQUEST')
export const SIGNUP_SUCCESS = type('SIGNUP_SUCCESS')
export const SIGNUP_FAIL = type('SIGNUP_FAIL')

// Fetch the authenticated user from database
export const FETCH_USER_REQUEST = type('FETCH_USER_REQUEST')
export const FETCH_USER_SUCCESS = type('FETCH_USER_SUCCESS')
export const FETCH_USER_FAIL = type('FETCH_USER_FAIL')
