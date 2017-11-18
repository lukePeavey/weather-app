import * as types from './constants'

const initialState = {
  /**
   * An object contains places (from Google Places API).
   * Each key is a placeid and the value is the place object associated with that ID.
   */
  places: {},
  /** The currently active location */
  activePlaceId: ''
}

/**
 * Stores all of the location data.
 * Places are stored using the same structure as the weather state, in an object with
 * placeid as keys and place details as value.
 */
export const placesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_PLACE_DETAILS_REQUEST:
      if (payload.name) {
        return {
          ...state,
          places: {
            ...state.places,
            [payload.placeid]: { formatted_address: payload.name, loading: true }
          }
        }
      } else {
        return state
      }

    case types.FETCH_PLACE_DETAILS_SUCCESS:
      return {
        ...state,
        places: { ...state.places, [payload.place.place_id]: payload.place }
      }

    case types.FETCH_PLACE_DETAILS_FAIL:
      const { placeid, error } = payload
      return {
        ...state,
        places: { ...state.places, [payload.placeid]: { error: payload.error } }
      }

    case types.SET_ACTIVE_PLACE_ID:
      return { ...state, activePlaceId: payload.placeid }

    default:
      return state
  }
}
