import React from 'react'
import Button from '../Button'
import { StyleSheet, css } from 'aphrodite/no-important'

import { storiesOf } from '@storybook/react'
import {
  GpsIcon,
  SearchIcon,
  MenuIcon,
  SettingsIcon,
  PlaceIcon,
  ExpandMoreIcon,
  ExpandLessIcon
} from '.'

const stories = storiesOf('New Icons', module)
stories.add('default', () => (
  <div
    className="storyWrapper"
    style={{ fontSize: 16, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <GpsIcon className={styles.Bobby} />
      <span>GPS Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <SearchIcon />
      <span>Search Icon</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <MenuIcon />
      <span>Menu Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <SettingsIcon />
      <span>Settings Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <PlaceIcon />
      <span>Place Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <ExpandMoreIcon />
      <span>Expand More Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <ExpandLessIcon />
      <span>Expand Less Icon</span>
    </div>
  </div>
))
stories.add('Align Left', () => (
  <div
    className="storyWrapper"
    style={{ fontSize: 16, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <Button>
        <SettingsIcon size={22} />
        <div style={{ marginTop: 0 }}>Settings</div>
      </Button>
    </div>
  </div>
))

const styles = StyleSheet.create({
  Bobby: {
    color: 'pink',
    transform: 'scale(1)',
    transition: 'all 1s',
    ':hover': {
      transform: 'scale(2)'
    }
  }
})
