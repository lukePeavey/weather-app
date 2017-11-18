import * as types from './constants'

const initialState = []

export const savedPlacesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_SAVED_PLACES_SUCCESS:
      return payload.places

    default:
      return state
  }
}
