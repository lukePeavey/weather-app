import * as types from './constants'

const Tabs = {
  current: 'current',
  tomorrow: 'tomorrow',
  forecast: 'forecast'
}

const initialState = {
  activeTab: Tabs.current,
  isPlacesMenuOpen: false,
  isNavDrawerOpen: false,
  searchInputValue: '',
  searchSuggestions: [],
  isFetchingSearchSuggestions: false
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case types.SET_ACTIVE_TAB:
      if (action.payload && action.payload.tab) {
        if (action.payload.tab in Tabs) {
          return { ...state, activeTab: action.payload.tab }
        }
      }
      return state

    case types.TOGGLE_PLACES_MENU:
      return { ...state, isPlacesMenuOpen: !state.isPlacesMenuOpen }

    case types.TOGGLE_NAV_DRAWER:
      return { ...state, isNavDrawerOpen: !state.isNavDrawerOpen }

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
