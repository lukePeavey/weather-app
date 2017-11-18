import * as types from './constants'

export const fetchPlaceDetailsRequest = placeid => ({
  type: types.FETCH_PLACE_DETAILS_REQUEST,
  payload: { placeid }
})

export const fetchPlaceDetailsSuccess = place => ({
  type: types.FETCH_PLACE_DETAILS_SUCCESS,
  payload: { place }
})

export const fetchPlaceDetailsFail = () => ({
  type: types.FETCH_PLACE_DETAILS_SUCCESS
})

export const selectLocation = (name, placeid) => ({
  type: types.SELECT_LOCATION,
  payload: { name, placeid }
})

export const setActivePlaceId = placeid => ({
  type: types.SET_ACTIVE_PLACE_ID,
  payload: { placeid }
})
