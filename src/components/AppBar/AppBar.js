import React from 'react'
import { withStyles } from 'material-ui/styles'
import NavBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import MenuButton from './MenuButton'
import NavDrawer from '../../containers/NavDrawer'
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
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: spacing.unit,
    marginBottom: 0
  },
  tabs: {
    minWidth: '100%',
    minHeight: spacing.unit * 6,
    zIndex: 1
  },
  tab: {
    flex: '1 0 0',
    height: spacing.unit * 6
  },
  menuIcon: {
    zIndex: '999',
    position: 'absolute',
    top: spacing.unit, // 16px
    left: spacing.unit * 2, // 8px
    color: '#000',
    opacity: 0.7,
    width: spacing.unit * 5,
    height: spacing.unit * 5
  },
  [breakpoints.up('md')]: {
    root: {},
    toolBar: {
      flexWrap: 'nowrap',
      marginLeft: spacing.unit * 2
    },
    tabs: {
      minWidth: 0,
      position: 'relative',
      marginLeft: 'auto',
      minHeight: spacing.unit * 8
    },
    tab: {
      height: spacing.unit * 8,
      maxWidth: '33%',
      flex: '1 0 33%'
    },
    menuIcon: {
      top: spacing.unit * 2.5,
      left: spacing.unit * 2
    }
  }
})

export default withStyles(styles)(AppBar)
