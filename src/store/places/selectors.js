import { get, isEmpty, values } from 'lodash'

export const getSavedPlaces = state => {
  let placeIds = get(state, 'auth.user.places', [])
  return values(get(state, 'places.places', {}))
    .filter(place => placeIds.includes(place.place_id))
    .map(place => ({
      weather: get(state, `weather.current.${place.place_id}.conditions`),
      place
    }))
}

export const getPlace = (state, placeid) => {
  return get(state, `places.places.${placeid}`)
}

export const getActivePlaceId = state => {
  return get(state, 'places.activePlaceId', '')
}

export const getCurrentPlaceName = state => {
  const placeid = get(state, 'places.activePlaceId', '')
  return placeid === 'auto'
    ? get(state, 'weather.current.auto.location.full')
    : get(state, `places.places.${placeid}.formatted_address`)
}

export const getSearchValue = state => {
  return get(state, 'places.searchValue')
}

export const getSearchSuggestions = state => {
  return get(state, 'places.searchSuggestions', [])
}

export const getActiveSearchSuggestion = state => {
  return get(state, 'places.activeSearchSuggestion', [])
}
