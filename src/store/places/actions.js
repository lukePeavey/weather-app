import * as types from './constants'

/** Toggles the places menu */
export const openPlacesMenu = () => ({
  type: types.OPEN_PLACES_MENU
})
/** Close the places menu */
export const closePlacesMenu = () => ({
  type: types.CLOSE_PLACES_MENU
})

/** Sets the value of the places search bar input */
export const setSearchValue = value => ({
  type: types.SET_SEARCH_VALUE,
  payload: { value }
})

/** Sets the active autocomplete suggestion for places search bar */
export const setActiveSuggestion = index => ({
  type: types.SET_ACTIVE_SUGGESTION,
  payload: { index }
})

/** Resets the search bar to init state */
export const resetSearchBar = () => ({
  type: types.RESET_SEARCH_BAR
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

/** Fetch users saved locations  */
export const fetchSavedPlacesRequest = () => ({
  type: types.FETCH_SAVED_PLACES_REQUEST
})

export const fetchSavedPlacesSuccess = places => ({
  type: types.FETCH_SAVED_PLACES_SUCCESS,
  payload: { places }
})

export const fetchSavedPlacesFail = error => ({
  type: types.FETCH_SAVED_PLACES_FAIL,
  payload: { error }
})

/** Add a place to the user's list of saved locations */
export const addSavedPlaceRequest = placeid => ({
  type: types.ADD_SAVED_PLACE_REQUEST,
  payload: { placeid }
})

export const addSavedPlaceSuccess = placeid => ({
  type: types.ADD_SAVED_PLACE_SUCCESS,
  payload: { placeid }
})

export const addSavedPlaceFail = error => ({
  type: types.ADD_SAVED_PLACE_FAIL,
  payload: { error }
})

/** Remove a place from user's list of saved locations */
export const removeSavedPlaceRequest = placeid => ({
  type: types.REMOVE_SAVED_PLACE_REQUEST,
  payload: { placeid }
})

export const removeSavedPlaceSuccess = placeid => ({
  type: types.REMOVE_SAVED_PLACE_SUCCESS,
  payload: { placeid }
})

export const removeSavedPlaceFail = error => ({
  type: types.REMOVE_SAVED_PLACE_FAIL,
  payload: { error }
})

/** Sets the active place for feather forecast */
export const setActivePlace = placeid => ({
  type: types.SET_ACTIVE_PLACE,
  payload: { placeid }
})
