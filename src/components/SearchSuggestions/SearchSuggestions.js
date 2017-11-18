import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import renderSuggestion from './renderSuggestion'

/** Displays a list of autocomplete suggestions for the places search bar */
class SearchSuggestions extends PureComponent {
  static propTypes = {
    /** An array of autocomplete suggestions (from Google Places API) */
    suggestions: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        structured_formatting: PropTypes.object.isRequired
      })
    )
  }

  render() {
    const { suggestions = [], classes, ...props } = this.props
    return (
      <div className={classes.root}>
        {suggestions.map(suggestion => renderSuggestion({ suggestion, classes, ...props }))}
      </div>
    )
  }
}

const styles = ({ palette, spacing }) => ({
  root: {},
  item: {
    display: 'flex',
    alignItems: 'center',
    height: spacing.unit * 5,
    width: '100%',
    padding: `0 ${spacing.unit * 2}px`,
    appearance: 'none',
    color: 'inherit',
    textAlign: 'left',
    lineHeight: 1,
    border: 'none',
    boxShadow: 'none',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    transition: 'all 100ms',
    borderBottom: 'solid 1px rgba(0,0,0,0.08)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.03)'
    },
    '&:focus': {
      backgroundColor: 'rgba(0,0,0,0.03)',
      outline: 'none'
    }
  },
  icon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginRight: spacing.unit * 1
  }
})

export default withStyles(styles)(SearchSuggestions)
