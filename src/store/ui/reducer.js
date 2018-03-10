import * as types from './constants'

export const Tabs = [
  { id: 'today', label: 'Today' },
  { id: 'tomorrow', label: 'Tomorrow' },
  { id: 'forecast', label: '10 Day' }
]

const initialState = {
  tabs: Tabs,
  activeTabIndex: 0,
  isPlacesMenuOpen: false,
  isNavDrawerOpen: false,
  searchInputValue: '',
  searchSuggestions: [],
  isFetchingSearchSuggestions: false
}

export const uiReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case types.SET_ACTIVE_TAB:
      if (action.payload && action.payload.tab) {
        if (action.payload.tab in Tabs) {
          return { ...state, activeTabIndex: action.payload.tab }
        }
      }
      return state

    case types.OPEN_NAV_DRAWER:
      return { ...state, isNavDrawerOpen: true }

    case types.CLOSE_NAV_DRAWER:
      return { ...state, isNavDrawerOpen: false }

    case types.OPEN_PLACES_MENU:
      return { ...state, isPlacesMenuOpen: true }

    case types.CLOSE_PLACES_MENU:
      return { ...state, isPlacesMenuOpen: false }

    case types.CHANGE_INPUT_VALUE:
      return { ...state, searchInputValue: action.payload.value }

    case types.FETCH_SEARCH_SUGGESTIONS_REQUEST:
      return { ...state, isFetchingSearchSuggestions: true }

    case types.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
      return { ...state, searchSuggestions: action.payload.suggestions }

    case types.CLEAR_SEARCH_SUGGESTIONS:
      return { ...state, searchSuggestions: [] }

    default:
      return state
  }
}
