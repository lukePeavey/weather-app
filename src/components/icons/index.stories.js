import React from 'react'
import { storiesOf } from '@storybook/react'
// Import Icons
import SearchIcon from './Search'
import PlaceIcon from './Place'
import GeolocationIcon from './Geolocation'
import SettingsIcon from './Settings'
import MenuIcon from './Menu'
import ExpandMoreIcon from './ExpandMore'
import ExpandLessIcon from './ExpandLess'

const stories = storiesOf('Icons', module)
stories.add('default', () => (
  <div className="storyWrapper">
    <div style={{ display: 'flex' }}>
      <span style={{ padding: 12 }}>
        <SearchIcon />
      </span>
      <span style={{ padding: 12 }}>
        <GeolocationIcon />
      </span>
      <span style={{ padding: 12 }}>
        <PlaceIcon />
      </span>
      <span style={{ padding: 12 }}>
        <SettingsIcon />
      </span>
      <span style={{ padding: 12 }}>
        <MenuIcon />
      </span>
      <span style={{ padding: 12 }}>
        <ExpandMoreIcon />
      </span>
      <span style={{ padding: 12 }}>
        <ExpandLessIcon />
      </span>
    </div>
  </div>
))

stories.add('Custom size/color', () => (
  <div className="storyWrapper">
    <div style={{ display: 'flex' }}>
      <span style={{ padding: 12 }}>
        <GeolocationIcon size={40} color="#865CD6" />
      </span>
      <span style={{ padding: 12 }}>
        <PlaceIcon size={40} color="#865CD6" />
      </span>
      <span style={{ padding: 12 }}>
        <SettingsIcon size={40} color="#865CD6" />
      </span>
    </div>
  </div>
))

stories.add('Custom Styles', () => (
  <div className="storyWrapper">
    <div style={{ display: 'flex' }}>
      <GeolocationIcon size={40} color="#865CD6" style={{ margin: 50 }} />
      <PlaceIcon size={40} color="#865CD6" style={{ margin: 50 }} />
      <SettingsIcon size={40} color="#865CD6" style={{ margin: 50 }} />
    </div>
  </div>
))
