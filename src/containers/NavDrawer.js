import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout, fetchUserRequest } from '../store/auth/actions'
import { fetchSettingsRequest, changeSetting } from '../store/settings/actions'
import { addSavedPlaceRequest } from '../store/savedPlaces/actions'
import { openNavDrawer, closeNavDrawer } from '../store/ui/actions'
import * as fromState from '../store/selectors'
import NavDrawer from '../components/NavDrawer'

class NavDrawerContainer extends Component {
  static propTypes = {
    /** Navbar open/closed state */
    open: PropTypes.bool.isRequired,
    /** The user's settings */
    settings: PropTypes.object.isRequired,
    /** Authenticated user object (or null) */
    user: PropTypes.object,
    /** Bound redux actions */
    dispatch: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.dispatch.fetchUserRequest()
    this.props.dispatch.fetchSettingsRequest()
  }

  /**
   * Change the value of a setting
   */
  changeSetting = (event, value) => {
    const { dispatch } = this.props
    const name = event.currentTarget.name
    value = typeof value === 'boolean' ? value : String(value)
    dispatch.changeSetting(name, value)
  }

  /**
   * Handler for the logout button in navDrawer
   */
  logout = () => {
    const { dispatch } = this.props
    dispatch.logout()
    dispatch.closeNavDrawer()
  }

  addSavedPlace = () => {
    const { dispatch } = this.props
    dispatch.addSavedPlaceRequest()
    dispatch.closeNavDrawer()
  }

  render() {
    return (
      <NavDrawer
        {...this.props}
        logout={this.logout}
        changeSetting={this.changeSetting}
        addSavedPlace={this.addSavedPlace}
      />
    )
  }
}

const mapStateToProps = state => ({
  open: fromState.getIsNavDrawerOpen(state),
  settings: fromState.getSettings(state),
  user: fromState.getAuthenticatedUser(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators(
    {
      logout: logout,
      changeSetting: changeSetting,
      addSavedPlaceRequest: addSavedPlaceRequest,
      fetchUserRequest: fetchUserRequest,
      fetchSettingsRequest: fetchSettingsRequest,
      openNavDrawer: openNavDrawer,
      closeNavDrawer: closeNavDrawer
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawerContainer)
