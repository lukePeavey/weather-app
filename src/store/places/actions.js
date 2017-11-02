import * as types from './constants'

// @todo - The UI state for the places menu and search bar (visibility, search
// input value, autocomplete suggestions, active suggestion, etc) could really
// be handled with local component state instead of redux. This state is not
// shared with any other components outside of the places menu.

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

export const fetchPlaceDetailsRequest = (placeid, name = '') => ({
  type: types.FETCH_PLACE_DETAILS_REQUEST,
  payload: { placeid, name }
})

export const fetchPlaceDetailsSuccess = place => ({
  type: types.FETCH_PLACE_DETAILS_SUCCESS,
  payload: { place }
})

export const selectLocation = (name, placeid) => ({
  type: types.SELECT_LOCATION,
  payload: { name, placeid }
})

export const setActivePlace = placeid => ({
  type: types.SET_ACTIVE_PLACE,
  payload: { placeid }
})
