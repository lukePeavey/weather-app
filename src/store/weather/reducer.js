import * as types from './constants'
const assign = Object.assign

const initialState = {
  /**
   * On object containing current weather conditions for one or more locations.
   * Each key is a placeid, and the value is an object containing current weather
   * conditions for that location.
   */
  current: {},
  /**
   * An object containing daily forecast data for one or more locations.
   * Each key is place id, and the value is an array of forecast days (10
   * days total)
   */
  forecastDays: {},
  /**
   * An object containing hourly forecast data for one or more locations.
   * Each key is a placeid, and the value is an array of forecast hours
   * covering a total of 10 days.
   */
  forecastHours: {}
}

/**
 * The weather state stores weather data for multiple locations. Right now,
 * it will store the data for every location that user visits in a single
 * session (until browser refresh). This prevents having to fetch data multiple
 * times if user switches back and forth between locations. Ideally, it should
 * only store data for the user's saved locations, since there is good chance
 * he/she will revisit them in the same session. For non-saved locations that
 * user visits via the search feature, it would probably be better to only
 * keep the current location.
 *
 * @todo The overall design of this redux module still needs work
 * @todo Add isFetching indicator
 * @todo Better way of handling nested state objects (Immutable/Normalizr)
 */
export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action
  const placeid = payload ? payload.placeid || 'auto' : null

  switch (type) {
    case types.FETCH_WEATHER_FOR_SAVED_PLACES_SUCCESS:
      return { ...state, current: assign({}, state.current, payload.weather) }

    case types.FETCH_CURRENT_WEATHER_SUCCESS:
      // return a new state object. If state.current already contains an entry
      // for the specified placeid, it will be overwritten, otherwise the placeid
      // will be added as a new entry to state.current
      return {
        ...state,
        current: assign({}, state.current, { [placeid]: payload.conditions })
      }

    case types.FETCH_CURRENT_WEATHER_FAIL:
      // Handle failed fetch request
      return state

    case types.FETCH_DAILY_WEATHER_SUCCESS:
      // Same process described above, except for daily weather forecast
      return {
        ...state,
        forecastDays: assign({}, state.forecastDays, { [placeid]: payload.days })
      }

    case types.FETCH_DAILY_WEATHER_FAIL:
      // Handle failed fetch request
      return state

    case types.FETCH_HOURLY_WEATHER_SUCCESS:
      // Same process described above, except for hourly weather forecast
      return {
        ...state,
        forecastHours: assign({}, state.forecastHours, { [placeid]: payload.hours })
      }

    case types.FETCH_HOURLY_WEATHER_FAIL:
      // Handle failed fetch request for hourly forecast
      return state

    default:
      return state
  }
}
