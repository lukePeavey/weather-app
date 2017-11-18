import React from 'react'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import { GpsIcon } from '../icons'
import SavedPlace from '../../containers/SavedPlace'

/** A list of saved places for the current user */
const SavedPlaces = ({ placeIds = [], handleSelect, classes }) => {
  const UserGeoLocation = () => (
    <button className={classnames(classes.place, classes.geoLocation)} onClick={handleSelect}>
      <GpsIcon className={classes.geoIcon} />
      <span>Use my location</span>
    </button>
  )
  return [
    <UserGeoLocation key="geolocation" />,
    ...placeIds.map(id => (
      <SavedPlace id={id} classes={classes} key={id} handleSelect={handleSelect} />
    ))
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
