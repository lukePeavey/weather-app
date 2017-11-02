import * as types from './constants'

const initialState = []

export const notificationsReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.ADD_NOTIFICATION:
      return [...state, payload.notification]

    case types.REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== payload.id)

    default:
      return state
  }
}
