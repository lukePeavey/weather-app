import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import PlaceIcon from '../icons/Place'

/** Displays a list of autocomplete suggestions for the places search bar */
const SearchSuggestions = ({ suggestions }) =>
  suggestions.map(({ description }) => (
    <li className={css(styles.suggestion)}>
      <PlaceIcon size={18} style={{ marginRight: 8 }} />
      {description}
    </li>
  ))

const styles = StyleSheet.create({
  suggestion: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 15px',
    borderBottom: 'solid 1px rgba(0,0,0,0.05)',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.03)'
    }
  }
})

export default SearchSuggestions
