import * as types from './constants'

const initialState = {
  /**
   * A flag that indicates if fetching weather for the active location
   */
  fetchingWeather: false,

  /**
   * An object containing current weather conditions for multiple locations. Each
   * entry represents the weather data for a single location, where the key is a
   * placeID and the value is an object containing current weather data.
   */
  current: {},
  /**
   * An object containing daily forecast data for multiple locations. Each entry
   * represents the data for a single location, where the key is a placeID and the
   * value is an array of forecastDays (10 days total). Each forecastDay is an
   * object containing weather data for that period.
   */
  forecastDays: {},
  /**
   * An object containing hourly forecast data for multiple locations. Each entry
   * represents the data for a single location, where the key is a placeID and the
   * value is an array of forecastHours (240 hours total). Each forecastHour is an
   * object containing weather data for that period.
   */
  forecastHours: {}
}

/**
 * The weather state stores weather data for multiple locations. This prevents having
 * to re-fetch data if the user switches back and forth between locations. It also
 * cuts down on the number of API requests.
 * @todo handle failed fetch weather request
 */
export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.FETCH_WEATHER_SUCCESS:
      const data = payload.data
      const placeid = payload.placeid
      // Fetch weather action gets weather data for a single location.
      if (data) {
        return {
          ...state,
          current: data.current ? { ...state.current, [placeid]: data.current } : state.current,
          days: data.days ? { ...state.days, [placeid]: data.days } : state.days,
          hours: data.hours ? { ...state.hours, [placeid]: data.hours } : state.hours
        }
      }
      return state

    // Handle failed attempt to fetch weather
    case types.FETCH_WEATHER_FAIL:
      return state

    // Clear weather state on logout
    case 'LOGOUT':
      return initialState

    default:
      return state
  }
}
