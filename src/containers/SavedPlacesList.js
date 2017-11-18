import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SavedPlacesList from '../components/SavedPlaces'
import * as actions from '../store/savedPlaces/actions'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  placeIds: fromState.getSavedPlaceIds(state)
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlacesList)
