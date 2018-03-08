import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmpty from 'lodash/isEmpty'

// Import Redux Actions + selectors
import * as actions from '../../store/places/actions'
import { addNotification } from '../../store/notifications/actions'
import { addSavedPlaceRequest } from '../../store/savedPlaces/actions'
import { fetchSavedPlacesRequest } from '../../store/savedPlaces/actions'
import * as fromState from '../../store/selectors'

// Import child containers
import SearchBar from './SearchBar'
import SearchSuggestions from './SearchSuggestions'
import SavedPlaces from './SavedPlacesList'

// Components
import Dropdown from '../../components/Dropdown'

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
class PlacesMenuContainer extends Component {
  static propTypes = {
    /** Places menu active state (passed down from AppBar) */
    isActive: PropTypes.bool.isRequired,
    /** toggles the places menu's active state (passed down from AppBar) */
    togglePlacesMenu: PropTypes.func.isRequired,
    /** The current value of the search bar's inptu (redux state).  */
    searchValue: PropTypes.string.isRequired,
    /** Bound redux actions. See store/places/actions */
    dispatch: PropTypes.object.isRequired
  }

  state = {
    pristine: true
  }

  async componentDidMount() {
    const { dispatch } = this.props
    dispatch.fetchSavedPlacesRequest()
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
    this.clearSearchBar()
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  /** Set active state to true when menu is clicked */
  handleClick = event => {
    if (!this.props.isActive) {
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
    this.searchBar.clear()
  }

  /** Handles when user selects a location  */
  handleSelect = (e, place) => {
    const { dispatch } = this.props
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

  getSearchBarRef = component => {
    this.searchBar = component
  }

  render() {
    const { classes, searchValue, isActive } = this.props
    const { handleClick, getElementRef, getSearchBarRef, handleSelect } = this

    return (
      <div className={classes.root} onClick={handleClick} ref={getElementRef}>
        <SearchBar getSearchBarRef={getSearchBarRef} isActive={isActive} />
        <Dropdown open={isActive}>
          {isEmpty(searchValue) ? (
            <SavedPlaces handleSelect={handleSelect} />
          ) : (
            <SearchSuggestions handleSelect={handleSelect} />
          )}
        </Dropdown>
      </div>
    )
  }
}

const styles = ({ spacing, breakpoints }) => ({
  root: {
    zIndex: 99,
    position: 'relative',
    height: spacing.unit * 5,
    flex: '1 0 auto',

    [breakpoints.up('md')]: {
      margin: 0,
      marginRight: spacing.unit * 6,
      width: 'auto',
      maxWidth: 500,
      flex: '1 0 50%'
    }
  }
})

const mapStateToProps = (state, ownProps) => ({
  searchValue: fromState.getSearchInputValue(state),
  unit: fromState.getUnit(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators(
    {
      ...actions,
      fetchSavedPlacesRequest,
      addNotification,
      addSavedPlaceRequest
    },
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlacesMenuContainer))
