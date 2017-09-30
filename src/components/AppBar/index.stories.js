import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { storiesOf } from '@storybook/react'
import PlacesMenu from '../PlacesMenu'
import SettingsIcon from '../icons/Settings'
import SearchIcon from '../icons/Search'
import autocompleteData from '../../../__mocks__/data/places.autocomplete.json'
import placesData from '../../../__mocks__/data/places.json'
import background from '../../images/green-field.jpg'

const CurrentPlace = ({ place }) => (
  <div className={css(styles.currentPlace)}>
    <SearchIcon size={22} style={{ marginRight: 10 }} />
    <span>{place}</span>
  </div>
)

/**
 * I had to create a separate mock of the AppBar in order to render
 * the different states in storybook. In the real app, the PlacesMenu
 * will receive data from a redux container.
 */
const AppBar = ({ PlacesMenuIsActive, place, placesMenuData }) => (
  <header className={css(styles.appBar)}>
    {PlacesMenuIsActive ? <PlacesMenu {...placesMenuData} /> : <CurrentPlace place={place} />}
    <nav className={css(styles.right)}>
      <SettingsIcon />
    </nav>
  </header>
)

const styles = StyleSheet.create({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: '0 15px',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  right: {
    marginLeft: 'auto'
  },
  currentPlace: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    color: '#fff'
  }
})

const stories = storiesOf('AppBar', module)

stories.add('Default state', () => (
  <AppBar
    PlacesMenuIsActive={false}
    place="Astoria, Queens, NY"
    placesMenuData={{
      searchSuggestions: [],
      savedPlaces: placesData
    }}
  />
))

stories.add('Places Menu Active', () => (
  <AppBar
    PlacesMenuIsActive={true}
    place="Astoria, Queens, NY"
    placesMenuData={{
      searchSuggestions: [],
      savedPlaces: placesData
    }}
  />
))

stories.add('Places search suggestions', () => (
  <AppBar
    PlacesMenuIsActive={true}
    place="Astoria, Queens, NY"
    placesMenuData={{
      searchSuggestions: autocompleteData,
      savedPlaces: placesData
    }}
  />
))
