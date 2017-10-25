import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import NavBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import { MenuIcon } from '../icons'
import SearchBar from '../SearchBar'

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
    minHeight: spacing.unit * 8
  },
  tab: {
    height: spacing.unit * 8
  },
  menuIcon: {
    zIndex: '999',
    position: 'absolute',
    top: spacing.unit, // 16px
    left: spacing.unit * 2, // 8px
    color: '#333'
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

class AppBar extends Component {
  render() {
    const { classes, activeTab = 0, handleTabChange, tabs = [] } = this.props
    return (
      <NavBar position="fixed" color="primary" className={classes.root}>
        <div className={classes.toolBar}>
          <IconButton className={classes.menuIcon} aria-label="Menu" color="inherit">
            <MenuIcon />
          </IconButton>
          <SearchBar value="Astoria, New York, US" className={classes.searchBar} />
          <Tabs
            className={classes.tabs}
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="#fff">
            {tabs.map(view => <Tab className={classes.tab} label={view.label} />)}
          </Tabs>
        </div>
      </NavBar>
    )
  }
}

export default withStyles(styles)(AppBar)
