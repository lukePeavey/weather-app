import React from 'react'
import get from 'lodash/get'
import { withStyles } from 'material-ui/styles'
import moment from 'moment'
import { getIconName, getCurrentTemp } from '../../../utils/weatherUtils'
import WeatherIcon from '../../WeatherIcon'

/**
 * Renders a single saved location in the savedPlaces menu.
 * Styles are defined in SavedPlacesList and passed down.
 * @todo refactor
 */
const SavedPlace = ({ classes, place, weather = {}, unit, handleSelect }) => {
  const time = get(weather, 'local_time_rfc822')
  return (
    <button className={classes.place} onClick={e => handleSelect(e, place)} key={place.place_id}>
      <div className={classes.details}>
        <div className={classes.name}>{place.formatted_address}</div>
        <div className={classes.time}>{time ? moment.parseZone(time).format('hh:mm a') : ''}</div>
      </div>
      <div className={classes.currentTemp}>{getCurrentTemp(weather, unit)}&deg;</div>
      <div className={classes.weatherIcon}>
        <WeatherIcon name={getIconName(weather)} />
      </div>
    </button>
  )
}

const styles = ({ palette, spacing }) => ({
  place: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: spacing.unit * 8,
    padding: 0,
    paddingLeft: spacing.unit * 2,
    paddingRight: spacing.unit * 2,
    appearance: 'none',
    color: 'inherit',
    textAlign: 'left',
    lineHeight: 1,
    border: 'none',
    boxShadow: 'none',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    transition: 'all 100ms',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)'
    },
    '&:focus': {
      backgroundColor: 'rgba(0,0,0,0.03)',
      outline: 'none'
    }
  },
  geoLocation: {
    color: '#4180B9'
  },
  geoIcon: {
    marginRight: spacing.unit
  },
  details: {
    marginRight: 'auto'
  },
  name: {
    marginBottom: spacing.unit
  },
  currentTemp: {
    fontSize: 24,
    marginRight: spacing.unit,
    fontWeight: 300,
    color: palette.text.secondary
  },
  time: {
    fontSize: 13,
    lineHeight: '16px',
    fontWeight: 500,
    color: palette.text.secondary,
    marginLeft: 'auto'
  },
  weatherIcon: {
    height: spacing.unit * 4,
    width: spacing.unit * 4,
    '& > img': {
      maxHeight: '100%',
      width: 'auto'
    }
  }
})

export default withStyles(styles)(SavedPlace)
