import * as types from './constants'

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
export const addSavedPlaceRequest = (placeid, loc) => ({
  type: types.ADD_SAVED_PLACE_REQUEST,
  payload: { placeid, loc }
})

export const addSavedPlaceSuccess = () => ({
  type: types.ADD_SAVED_PLACE_SUCCESS
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
