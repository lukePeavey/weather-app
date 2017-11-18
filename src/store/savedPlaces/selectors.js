import { get, isEmpty, values } from 'lodash'

export const getSavedPlaceIds = state => {
  return get(state, 'savedPlaces', [])
}
