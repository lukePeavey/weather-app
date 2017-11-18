import React from 'react'
import get from 'lodash/get'
import moment from 'moment'
import { getIconName } from '../../utils/weatherUtils'
import WeatherIcon from '../WeatherIcon'

/**
 * Renders a single saved location in the savedPlaces menu.
 * Styles are defined in SavedPlacesList and passed down.
 * @todo refactor
 */
const SavedPlace = ({ classes, place, weather = {}, handleSelect }) => {
  const time = get(weather, 'local_time_rfc822')
  return (
    <button className={classes.place} onClick={e => handleSelect(e, place)} key={place.place_id}>
      <div className={classes.details}>
        <div className={classes.name}>{place.formatted_address}</div>
        <div className={classes.time}>{time ? moment.parseZone(time).format('hh:mm a') : ''}</div>
      </div>
      <div className={classes.currentTemp}>{Math.round(weather.temp_f)}&deg;</div>
      <div className={classes.weatherIcon}>
        <WeatherIcon name={getIconName(weather)} />
      </div>
    </button>
  )
}

export default SavedPlace
