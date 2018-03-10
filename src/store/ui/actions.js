import * as types from './constants'

export const setActiveTab = index => ({
  type: types.SET_ACTIVE_TAB,
  payload: { index }
})

export const openPlacesMenu = () => ({
  type: types.OPEN_PLACES_MENU
})

export const closePlacesMenu = () => ({
  type: types.CLOSE_PLACES_MENU
})

export const openNavDrawer = () => ({
  type: types.OPEN_NAV_DRAWER
})

export const closeNavDrawer = () => ({
  type: types.CLOSE_NAV_DRAWER
})

export const changeSearchValue = (value = '') => ({
  type: types.CHANGE_INPUT_VALUE,
  payload: { value }
})

export const fetchSearchSuggestionsRequest = input => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_REQUEST,
  payload: { input }
})

export const fetchSearchSuggestionsSuccess = suggestions => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_SUCCESS,
  payload: { suggestions }
})

export const fetchSearchSuggestionsFail = suggestions => ({
  type: types.FETCH_SEARCH_SUGGESTIONS_FAIL
})

export const clearSearchSuggestions = () => ({
  type: types.CLEAR_SEARCH_SUGGESTIONS
})
