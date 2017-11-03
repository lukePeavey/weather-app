import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import { delay } from 'redux-saga'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import * as actions from '../store/places/actions'
import * as fromState from '../store/selectors'
import PlaceMenu from '../components/PlacesMenu'

/**
 * The places menu consists of a search bar and dropdown menu that can be
 * toggled in the main navigation bar; it allows the user to select the
 * geographic location for the weather forecast. By default, the active
 * location is shown in the search bar and dropdown menu is hidden. When the
 * user selects the search bar, the active location is replaced with placeholder
 * text and the dropdown menu appears. The dropdown shows a list of the user's saved
 * locations by default. When the user enters a value in the search bar the dropdown
 * shows a list of autocomplete suggestions for their search.
 */
class PlaceMenuContainer extends Component {
  static propTypes = {
    /** Places menu Active state (passed down from AppBar) */
    isActive: PropTypes.bool.isRequired,
    /** toggles the places menu's active state (passed down from AppBar) */
    togglePlacesMenu: PropTypes.func.isRequired,
    /** Bound redux actions. See store/places/actions */
    dispatch: PropTypes.object.isRequired
  }

  state = {
    /** The index of the focused item in the dropdown (for keyboard navigation) */
    activeSuggestionIndex: -1,
    /** The value of the search bar input */
    searchValue: '',
    /** Indicates if places menu has been focused/activated is this life cycle */
    pristine: true
  }

  componentDidMount() {
    const { dispatch } = this.props
    // Fetch user's saved locations 10 seconds after component mounts. This process
    // requires multiple API requests for each for each saved location (to fetch place
    // details, then weather data). If the user activates the places menu
    delay(10000).then(() => dispatch.fetchSavedPlacesRequest())
  }

  /** Opens the places menu */
  showMenu = () => {
    this.props.togglePlacesMenu(true)()
    // When the menu is active/open, attach an event listener to handle clicks outside the menu container.
    document.addEventListener('click', this.handleOutsideClick, false)
  }

  /** Hides the menu */
  hideMenu = () => {
    this.props.togglePlacesMenu(false)()
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  /** Set active state to true when menu is clicked */
  handleClick = event => {
    const { dispatch, savedPlaces } = this.props
    if (!this.props.isActive) {
      if (this.state.pristine && isEmpty(savedPlaces)) {
        dispatch.fetchSavedPlacesRequest()
      }
      this.setState({ pristine: false })
      this.showMenu()
    }
  }

  /** Handles clicks outside the Places Menu (while its active) */
  handleOutsideClick = event => {
    // Clicking anywhere outside the places menu hides it
    if (!this.node.contains(event.target)) {
      this.hideMenu()
    }
  }

  /** Clears the search bar and autocomplete suggestions */
  clearSearchBar = () => {
    this.setState({
      searchValue: '',
      suggestions: [],
      activeSuggestionIndex: -1
    })
    this.props.dispatch.clearSearchSuggestions()
  }

  /** Sets the active (focused) suggestion index */
  setActiveSuggestion = index => {
    const { activeSuggestionIndex } = this.state
    const { searchSuggestions } = this.props
    const newIndex = parseInt(index)
    if (newIndex >= 0 && newIndex < searchSuggestions.length) {
      this.setState({ activeSuggestionIndex: newIndex })
    }
  }

  /** The onChange handler for the search input */
  handleInputChange = event => {
    const value = String(event.currentTarget.value)
    const { dispatch } = this.props
    this.setState({ searchValue: value })
    if (value.length > 2) {
      dispatch.fetchSearchSuggestionsRequest(value)
    } else if (value.length === 0) {
      dispatch.clearSearchSuggestions()
    }
  }

  /** Handles when user selects a location  */
  handleSelect = (e, place) => {
    const { dispatch, history } = this.props
    const placeName = place && (place.description || place.formatted_address)
    const placeid = place.place_id
    if (placeName) {
      this.hideMenu()
      dispatch.selectLocation(placeName, placeid)
      this.clearSearchBar()
    }
  }

  /** Gets a reference to the root DOM element in the PlacesMenu component */
  getElementRef = node => {
    this.node = node
  }

  render() {
    return (
      <PlaceMenu
        {...this.props}
        {...this.state}
        getElementRef={this.getElementRef}
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        handleClick={this.handleClick}
        handleSelect={this.handleSelect}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  savedPlaces: fromState.getSavedPlaces(state),
  currentPlace: fromState.getCurrentPlaceName(state),
  searchSuggestions: fromState.getSearchSuggestions(state),
  unit: fromState.getUnit(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceMenuContainer)
