import * as types from './constants'

/** Change the input value of the search bar */
export const changeInputValue = value => ({
  type: types.CHANGE_INPUT_VALUE,
  payload: { value }
})

/** Resets the search bar to init state */
export const clearSearchSuggestions = () => ({
  type: types.CLEAR_SEARCH_SUGGESTIONS
})

/** Fetch autocomplete actions  */
export const fetchSearchSuggestionsRequest = input => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_REQUEST,
  payload: { input }
})

export const fetchSearchSuggestionsSuccess = suggestions => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_SUCCESS,
  payload: { suggestions }
})

export const fetchSearchSuggestionsFail = error => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_FAIL,
  payload: { error }
})
