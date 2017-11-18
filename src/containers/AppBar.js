import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppBar from '../components/AppBar'
import { setWeatherView } from '../store/weather/actions'
import * as fromState from '../store/selectors'

class AppBarContainer extends Component {
  state = {
    navDrawerOpen: false,
    placesMenuActive: false
  }

  handleTabChange = (event, value) => {
    this.props.dispatch.setWeatherView(value)
  }

  toggleNavDrawer = open => () => {
    this.setState({ navDrawerOpen: open })
  }

  togglePlacesMenu = active => () => {
    this.setState({ placesMenuActive: active })
  }

  render() {
    return (
      <AppBar
        {...this.props}
        {...this.state}
        toggleNavDrawer={this.toggleNavDrawer}
        togglePlacesMenu={this.togglePlacesMenu}
        handleTabChange={this.handleTabChange}
        HandleMenuButtonClick={this.handleMenuButtonClick}
      />
    )
  }
}

// prettier-ignore
const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators({
    setWeatherView,
  }, dispatch)
})

const mapStateToProps = (state, ownProps) => ({
  tabs: fromState.getWeatherViews(state),
  activeTab: fromState.getActiveView(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)
