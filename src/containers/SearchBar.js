import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import api from '../utils/api'
import { bindActionCreators } from 'redux'
import * as actions from '../store/searchbar/actions'
import * as fromState from '../store/selectors'
import SearchBar from '../components/SearchBar'

/**
 * Places search bar container.
 */
class SearchBarContainer extends Component {
  static propTypes = {
    /** The current input value */
    value: PropTypes.string,
    /** This is displayed in the search bar when it is inactive.  */
    currentPlace: PropTypes.string.isRequired,
    /** Bound redux actions. See store/searchBar/actions */
    dispatch: PropTypes.object.isRequired
  }

  /** Gets a reference to the SearchBar instance  */
  componentWillMount() {
    this.props.getSearchBarRef(this)
  }

  /** Clears the search bar and autocomplete suggestions */
  clear = () => {
    const { dispatch } = this.props
    dispatch.changeInputValue('')
    dispatch.clearSearchSuggestions()
  }

  /** Updates the input value and fetches autocomplete suggestions */
  handleInputChange = event => {
    const value = String(event.currentTarget.value)
    const { dispatch } = this.props
    dispatch.changeInputValue(value)
    if (value.length > 2) {
      dispatch.fetchSearchSuggestionsRequest(value)
    } else if (value.length === 0) {
      dispatch.clearSearchSuggestions()
    }
  }

  render() {
    return (
      <SearchBar value={this.props.value} handleChange={this.handleInputChange} {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentPlace: fromState.getActivePlaceName(state),
  value: fromState.getSearchInputValue(state)
})

const mapDispatchToProps = dispatch => ({
  dispatch: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)
