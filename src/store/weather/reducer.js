import * as types from './constants'

const initialState = {
  /** Flag that indicates if fetching weather for the active location */
  fetchingWeather: false,
  /** Flag that indicates if fetching weather for user's saved locations */
  fetchingWeatherForSavedPlaces: false,
  /**
   * On object containing current weather conditions for one or more locations.
   * Each key is a placeid, and the value is an object containing current weather
   * conditions for that location.
   */
  current: {},
  /**
   * An object containing daily forecast data for one or more locations.
   * Each key is place id, and the value is an array of forecast days (10
   * days total) for that location
   */
  forecastDays: {},
  /**
   * An object containing hourly forecast data for one or more locations.
   * Each key is a placeid, and the value is an array of forecast hours
   * (covering a total of 10 days) for that location
   */
  forecastHours: {},

  /** The current active weather tab */
  activeView: 0
}

/**
 * The weather state stores weather data for multiple locations. Right now,
 * it will store the data for every location that the user visits in a single
 * session (until browser refresh). This prevents having to fetch data multiple
 * times if user switches back and forth between locations. Ideally, it should
 * only store data for the user's saved locations, since there is good chance
 * he/she will revisit these in the same session.
 *
 * There are three types of weather data: current conditions, daily forecast,
 * and hourly forecast. Each of these types is stored in its own table, with
 * the following structure: the keys are placeIDs, which correspond to location
 * in the Google Places API, and values are the weather data for that location.
 *
 * @todo The overall design of this redux module still needs work
 * @todo handle failed fetch weather request
 * @todo figure out how to properly normalize weather API data with Normalizr.js
 * @todo use react-router to handle weather tab navigation or move to separate redux module
 */
export const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    // Fetch current weather success
    case types.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        current: {
          ...state.current,
          [payload.placeid]: payload.weather
        }
      }

    case types.FETCH_DAILY_FORECAST_SUCCESS:
      return {
        ...state,
        forecastDays: {
          ...state.forecastDays,
          [payload.placeid]: payload.days
        }
      }

    // Same process described above, except for hourly weather forecast
    case types.FETCH_HOURLY_FORECAST_SUCCESS:
      return {
        ...state,
        forecastHours: {
          ...state.forecastHours,
          [payload.placeid]: payload.hours
        }
      }

    // Sets active weather tab
    case types.SET_WEATHER_VIEW:
      const view = state.views.find(({ index }) => index === payload.index)
      return view ? { ...state, activeView: view.index } : state

    default:
      return state
  }
}
