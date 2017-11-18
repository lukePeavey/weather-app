import get from 'lodash/get'

export const getPlace = (state, placeid) => {
  return get(state, `places.places.${placeid}`) || get(state, `savedPlaces.${placeid}`)
}

export const getActivePlaceId = state => {
  return get(state, 'places.activePlaceId', '')
}

export const getActivePlaceName = state => {
  const placeid = get(state, 'places.activePlaceId', '')
  let placeName
  if (placeid === 'auto') {
    placeName = get(state, 'weather.current.auto.location.full')
  }
  placeName = get(state, `places.places.${placeid}.formatted_address`)
  return placeName || ''
}

export const getSearchValue = state => {
  return get(state, 'places.searchValue')
}

export const getActiveSearchSuggestion = state => {
  return get(state, 'places.activeSearchSuggestion', [])
}
