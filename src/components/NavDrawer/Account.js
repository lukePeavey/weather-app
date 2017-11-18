import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ListSubheader from 'material-ui/List/ListSubheader'
import { Link } from 'react-router-dom'
import { AccountIcon, AddAccountIcon, FilterListIcon, AddPlaceIcon } from '../icons'

class Account extends Component {
  render() {
    const { classes, user, logout, toggleNavDrawer, addSavedLocation } = this.props
    if (user)
      return (
        <List subheader={<ListSubheader>My Weather</ListSubheader>} className={classes.list}>
          <ListItem button onClick={addSavedLocation}>
            <ListItemIcon>
              <AddPlaceIcon />
            </ListItemIcon>
            <ListItemText primary="Save Current Location" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FilterListIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Saved Locations" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              logout()
              toggleNavDrawer(false)()
            }}>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      )
    return (
      <List subheader={<ListSubheader>My Weather</ListSubheader>} className={classes.list}>
        <Link to="/auth/login">
          <ListItem button href="/auth/login">
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
        <Link to="/auth/signup">
          <ListItem button href="/auth/signup">
            <ListItemIcon>
              <AddAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Create an Account" />
          </ListItem>
        </Link>
      </List>
    )
  }
}
export default Account
