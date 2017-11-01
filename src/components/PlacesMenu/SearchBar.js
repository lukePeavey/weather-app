import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Input from '../Input'
import { SearchIcon } from '../icons'

/** Places (geo location) search bar */
class SearchBar extends Component {
  render() {
    const { classes, value, className, inputProps, children } = this.props
    const { placeholder } = this.props
    return (
      <form className={classnames(classes.root, className)}>
        {children}
        <Input
          type="search"
          name="geoSearch"
          className={classes.input}
          autoComplete="off"
          placeholder={'Search for city, state or zip'}
          value={value}
          {...inputProps}
        />
        <SearchIcon className={classes.icon} tabIndex={-1} />
      </form>
    )
  }
}

const styles = ({ palette, spacing, breakpoints, transitions }) => ({
  root: {
    width: '100%',
    position: 'relative',
    flex: '1 0 0',
    height: spacing.unit * 5
  },
  input: {
    height: 'inherit',
    lineHeight: 'inherit',
    width: '100%',
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
    color: 'rgba(0,0,0,0.2)'
  },
  [breakpoints.down('md')]: {
    root: {
      maxWidth: '100%'
    }
  }
})

export default withStyles(styles)(SearchBar)
