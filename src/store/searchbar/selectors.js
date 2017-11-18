import get from 'lodash/get'

export const getSearchSuggestions = state => {
  return get(state, 'searchbar.suggestions', [])
}

export const getSearchInputValue = state => {
  return get(state, 'searchbar.inputValue', '')
}
