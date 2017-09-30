import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const CurrentPlace = place => (
  <div className="currentPlace">
    <SearchIcon />
    <span>{place || ''}</span>
  </div>
)

const AppBar = ({ PlacesMenuIsActive, currentPlace }) => (
  <header className={css(styles.appBar)}>
    {PlacesMenuIsActive ? <PlacesMenu /> : <CurrentPlace place={currentPlace} />}
    <nav className={scs(styles.right)}>
      <SettingsIcon />
    </nav>
  </header>
)

const styles = StyleSheet.create({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    height: 44,
    padding: '0 20px',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  right: {
    marginLeft: 'auto'
  }
})

export default AppBar
