import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppBar from '../components/AppBar'
import * as fromState from '../store/selectors'

class AppBarContainer extends Component {
  state = {
    navDrawerOpen: false,
    placesMenuActive: false,
    activeTab: 0
  }

  tabs = [
    { slug: 'today', label: 'Current', index: 0 },
    { slug: 'tomorrow', label: 'Tomorrow', index: 1 },
    { slug: 'forecast', label: '10 Days', index: 2 }
  ]

  handleTabChange = (event, value) => {
    const { history } = this.props
    const tab = this.tabs.find(tab => tab.index === value)
    if (tab) {
      this.setState({ activeTab: value })
      history.push(`/${tab.slug}`)
    }
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
        tabs={this.tabs}
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
  }, dispatch)
})

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)
