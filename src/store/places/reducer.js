import * as types from './constants'

const initialState = {
  /** The current input value of the geo location search bar */
  searchValue: '',
  /** This will be set to true while fetching search suggestions */
  fetchingSearchSuggestions: false,
  /** An array of suggestions from Google Places autocomplete */
  searchSuggestions: [],
  /** The index of the focused search suggestion */
  activeSearchSuggestion: -1,
  /** Determines if the places menu is visible */
  placesMenuIsVisible: false,
  /** The user's saved places */
  places: [],

  /** The currently active location */
  activePlaceId: ''
}

// @todo - The UI state for the places menu and search bar (visibility, search
// input value, autocomplete suggestions, active suggestion, etc) could really
// be handled with local component state instead of redux. This state is not
// shared with any other components outside of the places menu and is primarily
// UI state.

export const placesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_SEARCH_SUGGESTIONS_REQUEST:
      return { ...state, fetchingSearchSuggestions: true }

    case types.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
      return { ...state, searchSuggestions: payload.suggestions, fetchingSearchSuggestions: false }

    case types.FETCH_SEARCH_SUGGESTIONS_FAIL:
      return { ...state, fetchingSearchSuggestions: false }

    case types.FETCH_SAVED_PLACES_REQUEST:
      return state

    case types.FETCH_SAVED_PLACES_SUCCESS:
      return { ...state, places: payload.places }

    case types.FETCH_SAVED_PLACES_FAIL:
      return { ...state, places: [] }

    case types.CLEAR_SEARCH_SUGGESTIONS:
      return { ...state, searchSuggestions: [] }

    case types.FETCH_PLACE_DETAILS_REQUEST:
      if (payload.name) {
        return {
          ...state,
          places: {
            ...state.places,
            [payload.placeid]: { formatted_address: payload.name }
          }
        }
      }

    case types.FETCH_PLACE_DETAILS_SUCCESS:
      let place = payload.place
      let places = { ...state.places, [place.place_id]: place }
      return { ...state, places }

    case types.SET_ACTIVE_PLACE:
      return { ...state, activePlaceId: payload.placeid }

    default:
      return state
  }
}
