import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavDrawer from '../components/NavDrawer'
import { logout, fetchUserRequest } from '../store/auth/actions'
import { fetchSettingsRequest, changeSetting } from '../store/settings/actions'
import { addSavedPlaceRequest } from '../store/savedPlaces/actions'
import * as fromState from '../store/selectors'

class NavDrawerContainer extends Component {
  static propTypes = {
    /** Navbar open/closed state (passed down from AppBar) */
    open: PropTypes.bool.isRequired,
    /** Function that toggles navDrawer open/closed (passed down from AppBar) */
    toggleNavDrawer: PropTypes.func.isRequired,
    /** Bound redux actions (see mapDispatchToProps) */
    dispatch: PropTypes.object.isRequired,
    /** The user's settings */
    settings: PropTypes.object.isRequired,
    /** Authenticated user object (or null) */
    user: PropTypes.object,
    /** ID of the currently active location */
    activePlaceId: PropTypes.string.isRequired
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
    const { dispatch, toggleNavDrawer } = this.props
    dispatch.logout()
    toggleNavDrawer(false)()
  }

  addSavedLocation = () => {
    const { dispatch, toggleNavDrawer } = this.props
    dispatch.addSavedPlaceRequest()
    toggleNavDrawer(false)()
  }

  render() {
    return (
      <NavDrawer
        {...this.props}
        logout={this.logout}
        changeSetting={this.changeSetting}
        addSavedLocation={this.addSavedLocation}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  settings: fromState.getSettings(state),
  activePlaceId: fromState.getActivePlaceId(state),
  user: fromState.getAuthenticatedUser(state)
})

// prettier-ignore
const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators({
    logout,
    changeSetting,
    addSavedPlaceRequest,
    fetchUserRequest,
    fetchSettingsRequest,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawerContainer)
