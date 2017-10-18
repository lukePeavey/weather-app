import * as types from './constants'

const initialState = {
  /** Flag that indicates if the places menu is currently visible */
  placesMenuIsOpen: false,
  /** The current input value of the geo location search bar */
  searchValue: '',
  /** This will be set to true while fetching search suggestions */
  fetchingSearchSuggestions: false,
  /** An array of suggestions from Google Places autocomplete */
  searchSuggestions: [],
  /** The user's saved places */
  savedPlaces: [],
  /** The index of the focused search suggestion */
  activeSearchSuggestion: 0,
  /** The currently active location */
  currentPlace: 'Bath Maine'
}

export const placesReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.SET_SEARCH_VALUE:
      return { ...state, searchValue: payload.value }

    case types.FETCH_SEARCH_SUGGESTIONS_REQUEST:
      return { ...state, fetchingSearchSuggestions: true }

    case types.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
      return { ...state, searchSuggestions: payload.suggestions, fetchingSearchSuggestions: false }

    case types.FETCH_SEARCH_SUGGESTIONS_FAIL:
      return { ...state, fetchingSearchSuggestions: false }

    case types.SET_ACTIVE_SUGGESTION:
      return { ...state, activeSearchSuggestion: payload.index }

    case types.FETCH_SAVED_PLACES_REQUEST:
      return state

    case types.FETCH_SAVED_PLACES_SUCCESS:
      return { ...state, savedPlaces: payload.places }

    case types.FETCH_SAVED_PLACES_FAIL:
      return { ...state, savedPlaces: [] }

    case types.RESET_SEARCH_BAR:
      return {
        ...state,
        searchValue: '',
        fetchingSearchSuggestions: false,
        searchSuggestions: [],
        activeSearchSuggestion: 0
      }
    case types.SET_ACTIVE_PLACE:
      return { ...state, activePlace: payload.place }

    default:
      return state
  }
}
