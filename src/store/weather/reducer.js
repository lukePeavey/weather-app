import * as types from './constants'
const assign = Object.assign

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

  /**
   * The weather screen has three views: today, tomorrow, and 10 day forecast.
   * The views are displayed as tabs.
   */
  views: [
    { slug: 'current', label: 'Current', index: 0 },
    { slug: 'tomorrow', label: 'Tomorrow', index: 1 },
    { slug: 'forecast', label: '10 Days', index: 2 }
  ],

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
  const placeid = payload ? payload.placeid || 'auto' : null

  switch (type) {
    // This action is dispatched to fetch complete weather data for the
    // currently displayed location. See weather sagas for more details
    case types.WEATHER_FOR_ACTIVE_PLACE_REQUEST:
      return { ...state, fetchingWeather: true }
    // Set isFetching to false when this action completes succesffuly.
    case types.WEATHER_FOR_ACTIVE_PLACE_SUCCESS:
      return { ...state, fetchingWeather: false }

    // @todo - need separate isFetching flag for this action.
    case types.WEATHER_FOR_SAVED_PLACES_REQUEST:
      return { ...state, fetchingWeatherForSavedPlaces: true }
    // This action is dispatched to fetch weather data for the user's
    // saved locations. See weather sagas for more details
    case types.WEATHER_FOR_SAVED_PLACES_SUCCESS:
      return { ...state, fetchingWeatherForSavedPlaces: false }

    // FETCH_WEATHER fetches the current weather and basic 10 day forecast
    // for a single location. This is the data required to render the initial
    // state of the three weather views. Hourly forecast data is not displayed
    // by default, so it is fetched separately to speed up the initial render
    // of the weather views.
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        current: {
          ...state.current,
          [payload.placeid]: payload.weather.current
        },
        forecastDays: {
          ...state.forecastDays,
          [payload.placeid]: payload.weather.days
        }
      }

    // Same process described above, except for hourly weather forecast
    case types.FETCH_HOURLY_FORECAST_SUCCESS:
      return {
        ...state,
        forecastHours: {
          ...state.forecastHours,
          [payload.placeid]: payload.weather.hours
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
