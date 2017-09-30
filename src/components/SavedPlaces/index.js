import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PlaceIcon from '../icons/Place'

/** A list of saved places for the current user */
const SavedPlaces = ({ places = [] }) =>
  places.map(({ formatted_address, place_id, local_time }) => (
    <a href="#" className={css(styles.place)} onClick={console.log('click')}>
      <span className="name">{formatted_address}</span>
      <span className={css(styles.time)}>{local_time}</span>
    </a>
  ))

const styles = StyleSheet.create({
  place: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    borderBottom: 'solid 1px rgba(0,0,0,0.05)',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.03)'
    }
  },
  icon: {
    marginRight: 10
  },
  time: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.4)',
    marginLeft: 'auto'
  }
})

export default SavedPlaces
