import * as types from './constants'

const initialState = {
  /** Will be set to true if user has successfully logged in  */
  isAuthenticated: false,
  /** The authenticated user object, contains basic user profile info */
  user: null,
  /** Auth tokens are currently stored as cookie, so this just here for testing */
  token: null
}

/**
 * The authentication state
 */
export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, isRequesting: true, isAuthenticated: false, token: null }

    case types.LOGIN_SUCCESS:
      return { ...state, isRequesting: false, isAuthenticated: true, token: payload.token }

    case types.LOGIN_FAIL:
      return { ...state, isRequesting: false, isAuthenticated: false, token: null }

    case types.LOGOUT_SUCCESS:
      return { ...initialState }

    case types.FETCH_USER_REQUEST:
      return { ...state, user: null }

    case types.FETCH_USER_SUCCESS:
      const { fullName, email, savedLocations, settings } = payload.user
      return { ...state, user: payload.user }
    default:
      return state
  }
}
