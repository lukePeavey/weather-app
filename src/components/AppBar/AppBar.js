import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import NavBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import MenuButton from './MenuButton'
import NavDrawer from '../../components/NavDrawer'
import PlacesMenu from '../../containers/PlacesMenu'

/**
 * the AppBar contains top-level navigation and UI controls for the app.
 */
const AppBar = ({
  classes,
  navDrawerOpen,
  toggleNavDrawer,
  placesMenuActive,
  togglePlacesMenu,
  handleTabChange,
  activeTab = 0,
  tabs = [],
  settings,
  changeSetting,
  logout,
  user
}) => [
  <NavDrawer
    open={navDrawerOpen}
    toggleNavDrawer={toggleNavDrawer}
    user={user}
    settings={settings}
    changeSetting={changeSetting}
    logout={logout}
    key={'drawer'}
  />,
  <NavBar position="fixed" color="primary" className={classes.root} key={'navBar'}>
    <div className={classes.toolBar}>
      <MenuButton
        toggleNavDrawer={toggleNavDrawer}
        togglePlacesMenu={toggleNavDrawer}
        placesMenuActive={placesMenuActive}
        className={classes.menuIcon}
      />
      <PlacesMenu togglePlacesMenu={togglePlacesMenu} isActive={placesMenuActive} />
      <Tabs
        className={classes.tabs}
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="#fff">
        {tabs.map((tab, i) => <Tab key={i} className={classes.tab} label={tab.label} />)}
      </Tabs>
    </div>
  </NavBar>
]

/** AppBar styles */
const styles = ({ palette, spacing, breakpoints, transitions }) => ({
  root: {},
  toolBar: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    marginLeft: spacing.unit * 2
  },
  tabs: {
    marginLeft: 'auto',
    minHeight: spacing.unit * 8,
    zIndex: 1
  },
  tab: {
    height: spacing.unit * 8
  },
  menuIcon: {
    zIndex: '999',
    position: 'absolute',
    top: spacing.unit, // 16px
    left: spacing.unit * 2, // 8px
    color: '#000',
    opacity: 0.7
  },
  [breakpoints.down('md')]: {
    root: {},
    toolBar: {
      flexWrap: 'wrap',
      margin: spacing.unit,
      marginBottom: 0
    },
    tabs: {
      minWidth: '100%',
      minHeight: spacing.unit * 6
    },
    tab: {
      flex: '1 0 0',
      height: spacing.unit * 6
    },
    menuIcon: {
      width: spacing.unit * 5,
      height: spacing.unit * 5
    }
  }
})

export default withStyles(styles)(AppBar)
