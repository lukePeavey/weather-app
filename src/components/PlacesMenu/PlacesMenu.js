import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import isEmpty from 'lodash/isEmpty'
import SearchBar from './SearchBar'
import Suggestions from './SearchSuggestions'
import SavedPlaces from './SavedPlaces'
import Dropdown from './Dropdown'

/**
 * The places menu consists of searchBar and dropdown menu that can be toggled
 * in the main navbar; it enables the user to set the geographic location for
 * the weather forecast. See PlaceMenuContainer for more details.
 */
class PlacesMenu extends Component {
  render() {
    const {
      currentPlace,
      handleClick,
      isActive,
      searchValue,
      searchSuggestions = [],
      savedPlaces,
      handleSelect,
      classes,
      handleInputChange,
      getElementRef,
      ...props
    } = this.props
    return (
      <div className={classes.root} onClick={handleClick} ref={getElementRef}>
        <SearchBar
          inputProps={{
            onChange: handleInputChange,
            value: isActive ? searchValue : currentPlace
          }}
        />
        <Dropdown open={isActive}>
          <div className={classes.list}>
            {isEmpty(searchValue) ? (
              <SavedPlaces places={savedPlaces} handleSelect={handleSelect} />
            ) : (
              <Suggestions suggestions={searchSuggestions} handleSelect={handleSelect} />
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
    maxWidth: 500,
    height: spacing.unit * 5,
    flex: '1 0 auto',
    [breakpoints.down('up')]: {
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
