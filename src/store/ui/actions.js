import * as types from './constants'

export const setActiveTab = tab => ({
  type: types.SET_ACTIVE_TAB,
  payload: { tab }
})

export const openPlacesMenu = () => ({
  type: types.openPlacesMenu
})

export const closePlacesMenu = () => ({
  type: types.closePlacesMenu
})

export const openNavDrawer = () => ({
  type: types.openNavDrawer
})

export const closeNavDrawer = () => ({
  type: types.closeNavDrawer
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
