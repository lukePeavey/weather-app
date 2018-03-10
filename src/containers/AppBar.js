import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/ui/actions'
import * as fromState from '../store/selectors'
import AppBar from '../components/AppBar'

/**
 * AppBar Container
 * The appBar contains navigation, search, and settings. It has includes
 * multiple stateful components
 * 1. Tabs - navigation for different weather views
 * 2. PlacesMenu - location search bar and saved locations dropdown
 * 3. NavDrawer - contains settings, account options
 */
class AppBarContainer extends Component {
  static propTypes = {
    /** The tabs to display in the app bar */
    tabs: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
    ).isRequired,
    /** The index of the active tab */
    activeTabIndex: PropTypes.number.isRequired,
    /** Indicates if the places menu is currently open */
    isPlacesMenuOpen: PropTypes.bool.isRequired,
    /** Bound redux actions */
    dispatch: PropTypes.shape({
      openNavDrawer: PropTypes.func.isRequired,
      closeNavDrawer: PropTypes.func.isRequired,
      closePlacesMenu: PropTypes.func.isRequired,
      setActiveTabIndex: PropTypes.func.isRequired
    }).isRequired
  }

  /**
   * Handles the onChange event
   * @see https://material-ui-next.com/api/tabs/
   */
  handleTabChange = (event, value) => {
    const { dispatch } = this.props
    dispatch.setActiveTabIndex(value)
  }

  /**
   * Returns a function that either opens or closes the NavDrawer.
   * @param {boolean} open - determines the behavior of the returned function
   */
  toggleNavDrawer = (open = false) => () => {
    const { dispatch } = this.props
    dispatch[open ? 'openNavDrawer' : 'closeNavDrawer']()
  }

  /**
   * Returns a function that either opens or closes the PlacesMenu.
   * @param {boolean} open - determines the behavior of the returned function
   */
  togglePlacesMenu = (open = false) => () => {
    const { dispatch } = this.props
    dispatch[open ? 'openPlacesMenu' : 'closePlacesMenu']()
  }

  render() {
    return (
      <AppBar
        {...this.props}
        handleTabChange={this.handleTabChange}
        toggleNavDrawer={this.toggleNavDrawer}
        togglePlacesMenu={this.togglePlacesMenu}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  tabs: fromState.getTabs(state),
  activeTabIndex: fromState.getActiveTabIndex(state),
  isPlacesMenuOpen: fromState.getIsPlacesMenuOpen(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators(
    {
      openNavDrawer: actions.openNavDrawer,
      closeNavDrawer: actions.closeNavDrawer,
      closePlacesMenu: actions.openPlacesMenu,
      setActiveTabIndex: actions.setActiveTab
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)
