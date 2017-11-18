import * as types from './constants'

const initialState = {
  /** This will be set to true while fetching search suggestions */
  fetchingSuggestions: false,
  /** An array of suggestions from Google Places autocomplete */
  suggestions: [],
  /** The input value of the search bar */
  inputValue: ''
}

/**
 * The searchbar module manages state for the location search bar feature.
 * The searchbar is part of the `PlacesMenu` component.
 */
export const searchbarReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_SEARCH_SUGGESTIONS_REQUEST:
      return { ...state, fetchingSuggestions: true }

    case types.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
      return { ...state, suggestions: payload.suggestions, fetchingSuggestions: false }

    case types.FETCH_SEARCH_SUGGESTIONS_FAIL:
      return { ...state, fetchingSuggestions: false }

    case types.CLEAR_SEARCH_SUGGESTIONS:
      return { ...state, suggestions: [] }

    case types.CHANGE_INPUT_VALUE:
      return { ...state, inputValue: payload.value }

    default:
      return state
  }
}
