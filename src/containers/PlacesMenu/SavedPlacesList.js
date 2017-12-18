import React, { Component } from 'react'
import { connect } from 'react-redux'
import SavedPlace from './SavedPlace'
import * as fromState from '../../store/selectors'

class SavedPlacesContainer extends Component {
  render() {
    const { placeIds = [], handleSelect, classes } = this.props
    return placeIds.map(id => (
      <SavedPlace id={id} classes={classes} key={id} handleSelect={handleSelect} />
    ))
  }
}

const mapStateToProps = (state, ownProps) => ({
  placeIds: fromState.getSavedPlaceIds(state)
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlacesContainer)
