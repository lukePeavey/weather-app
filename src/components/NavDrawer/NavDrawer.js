import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import Divider from 'material-ui/Divider'
import { AccountIcon, AccountCircleIcon, DropDownIcon, AddPlaceIcon } from '../icons'
import Settings from './Settings'
import Account from './Account'

const NavDrawer = ({ open, toggleNavDrawer, classes, user, logout, ...settings }) => {
  return (
    <Drawer open={open} onRequestClose={toggleNavDrawer(false)}>
      <div className={classes.content}>
        <div className={classes.user}>
          <AccountCircleIcon className={classes.largeUserIcon} />
          <div className={classes.userInfo}>
            {user ? user.fullName : 'You are not logged in'}
            <DropDownIcon className={classes.arrow} />
          </div>
        </div>
        <Settings {...settings} />
        <Divider />
        <Account classes={classes} user={user} logout={logout} toggleNavDrawer={toggleNavDrawer} />
      </div>
    </Drawer>
  )
}

const styles = ({ palette, spacing }) => ({
  content: {
    width: 270
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    height: spacing.unit * 16,
    padding: spacing.unit * 2,
    paddingBottom: spacing.unit,
    backgroundColor: palette.primary[500],
    color: '#fff'
  },
  largeUserIcon: {
    height: 48,
    width: 48
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 'auto'
  },
  arrow: {
    marginLeft: 'auto'
  },
  list: {
    width: '100%'
  }
})
export default withStyles(styles)(NavDrawer)
