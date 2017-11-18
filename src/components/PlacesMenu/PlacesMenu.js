import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import isEmpty from 'lodash/isEmpty'
import SearchBar from '../../containers/SearchBar'
import SearchSuggestions from '../../containers/SearchSuggestions'
import SavedPlaces from '../../containers/SavedPlacesList'
import Dropdown from './Dropdown'

/**
 * The places menu consists of searchBar and dropdown menu that can be toggled
 * in the main navbar; it enables the user to set the geographic location for
 * the weather forecast. See PlaceMenuContainer for more details.
 */
class PlacesMenu extends Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired
  }
  render() {
    const {
      handleClick,
      isActive,
      savedPlaces,
      handleSelect,
      searchValue,
      classes,
      handleInputChange,
      getElementRef,
      getSearchBarRef
    } = this.props
    return (
      <div className={classes.root} onClick={handleClick} ref={getElementRef}>
        <SearchBar getSearchBarRef={getSearchBarRef} isActive={isActive} />
        <Dropdown open={isActive}>
          <div className={classes.list}>
            {isEmpty(searchValue) ? (
              <SavedPlaces handleSelect={handleSelect} />
            ) : (
              <SearchSuggestions handleSelect={handleSelect} />
            )}
          </div>
        </Dropdown>
      </div>
    )
  }
}

const styles = ({ spacing, breakpoints }) => ({
  root: {
    zIndex: 99,
    position: 'relative',
    width: '100%',
    height: spacing.unit * 5,
    flex: '1 0 auto',
    [breakpoints.up('md')]: {
      maxWidth: 500,
      marginRight: spacing.unit * 7
    }
  },
  list: {
    paddingLeft: 0,
    margin: 0,
    listStyleType: 'none'
  }
})

export default withStyles(styles)(PlacesMenu)
