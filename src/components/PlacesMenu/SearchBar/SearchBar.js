import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Input from '../../Input'
import { SearchIcon } from '../../icons'

/** Places search bar component */
class SearchBar extends Component {
  render() {
    const { classes, value, handleChange, isActive, currentPlace } = this.props
    return (
      <div className={classes.root}>
        <Input
          type="search"
          name="geoSearch"
          className={classes.input}
          autoComplete="off"
          placeholder={'Search for city, state or zip'}
          value={isActive ? value : currentPlace}
          onChange={handleChange}
        />
        <SearchIcon className={classes.icon} tabIndex={0} />
      </div>
    )
  }
}

const styles = ({ palette, spacing, breakpoints, transitions }) => ({
  root: {
    position: 'relative',
    flex: '1 0 0',
    height: spacing.unit * 5
  },
  input: {
    height: 'inherit',
    lineHeight: 'inherit',
    paddingLeft: spacing.unit * 7,
    color: palette.input.inputText,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transitionDuration: transitions.duration.shortest,
    transitionProperty: 'background-color'
  },
  icon: {
    position: 'absolute',
    top: 'calc(50% - 12px)',
    right: spacing.unit,
    color: 'rgba(0,0,0,0.3)',
    cursor: 'inherit',
    pointerEvents: 'none'
  }
})

export default withStyles(styles)(SearchBar)
