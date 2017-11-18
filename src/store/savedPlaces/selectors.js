import get from 'lodash/get'

export const getSavedPlaceIds = state => {
  return get(state, 'savedPlaces', [])
}
