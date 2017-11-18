import { connect } from 'react-redux'
import SavedPlacesList from '../components/SavedPlaces'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  placeIds: fromState.getSavedPlaceIds(state)
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlacesList)
