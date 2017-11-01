import React from 'react'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import get from 'lodash/get'
import moment from 'moment'
import { getIconName } from '../../utils/weatherUtils'
import WeatherIcon from '../WeatherIcon'
import { GpsIcon } from '../icons'

/** A list of saved places for the current user */
const SavedPlaces = ({ places = [], handleSelect, classes }) => {
  const UserGeoLocation = () => (
    <button className={classnames(classes.place, classes.geoLocation)}>
      <GpsIcon className={classes.geoIcon} />
      <span>Use my location</span>
    </button>
  )
  return [
    <UserGeoLocation key="geolocation" />,
    ...places.map(({ place: { formatted_address, place_id }, weather = {} }) => {
      const time = get(weather, 'local_time_rfc822')
      return (
        <button className={classes.place} key={place_id} onClick={() => handleSelect(place_id)}>
          <div className={classes.details}>
            <div className={classes.name}>{formatted_address}</div>
            <div className={classes.time}>
              {time ? moment.parseZone(time).format('hh:mm a') : ''}
            </div>
          </div>
          <div className={classes.currentTemp}>{Math.round(weather.temp_f)}&deg;</div>
          <div className={classes.weatherIcon}>
            <WeatherIcon name={getIconName(weather)} />
          </div>
        </button>
      )
    })
  ]
}

const styles = ({ palette, spacing }) => ({
  place: {
    display: 'flex',
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

export default withStyles(styles)(SavedPlaces)
