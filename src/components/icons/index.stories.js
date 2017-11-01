import React from 'react'
import { withStyles } from 'material-ui/styles'
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

const styles = ({ palette, spacing }) => ({
  container: {
    fontSize: 16,
    padding: spacing.unit * 3,
    color: palette.grey[700]
  },
  icon: { marginRight: 10 }
})

const IconStories = ({ classes }) => (
  <div className={classes.container}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <GpsIcon className={classes.icon} />
      <span>GPS Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <SearchIcon className={classes.icon} />
      <span>Search Icon</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <MenuIcon className={classes.icon} />
      <span>Menu Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <SettingsIcon className={classes.icon} />
      <span>Settings Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <PlaceIcon className={classes.icon} />
      <span>Place Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <ExpandMoreIcon className={classes.icon} />
      <span>Expand More Icon</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
      <ExpandLessIcon className={classes.icon} />
      <span>Expand Less Icon</span>
    </div>
  </div>
)

const WrapperIconStories = withStyles(styles)(IconStories)

storiesOf('Icons', module).add('default', () => <WrapperIconStories />)
