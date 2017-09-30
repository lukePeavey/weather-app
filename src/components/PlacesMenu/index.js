import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import isEmpty from 'lodash/isEmpty'
import SearchBar from '../SearchBar'
import SavedPlaces from '../SavedPlaces'
import Suggestions from '../SearchSuggestions'

/**
 * The places menu is pop-up menu that can be toggled in the navbar. It contains
 * a search bar and dropdown menu that allow the user to set the geographic
 * location for the weather forecast.  By default, the dropdown menu shows a
 * list of the user's saved locations. When the user enters a value in the
 * search bar, the dropdown will show a list of autocomplete suggestions for
 * the search. The geolocation data is powered by the Google Places API
 *
 * @todo think of better name for component/view
 */
const PlacesMenu = ({ searchSuggestions, savedPlaces }) => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.searchBar)}>
        <SearchBar placeholder="Search for city, state or zip" />
      </div>
      <div className={css(styles.dropDown)}>
        <ul className={css(styles.list)}>
          {isEmpty(searchSuggestions) ? (
            <SavedPlaces places={savedPlaces || []} />
          ) : (
            <Suggestions suggestions={searchSuggestions} />
          )}
        </ul>
      </div>
    </div>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 450,
    height: 40,
    border: 'solid 1px rgba(0,0,0,0.12)'
  },
  dropDown: {
    position: 'absolute',
    zIndex: 99,
    top: 'calc(100% + 5px)',
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    border: 'solid 1px rgba(0,0,0,0.12)'
  },
  list: {
    paddingLeft: 0,
    margin: 0,
    listStyleType: 'none'
  }
})

export default PlacesMenu
