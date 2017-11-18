import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SavedPlace from '../components/SavedPlaces/SavedPlace'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  place: fromState.getPlace(state, ownProps.id),
  weather: fromState.getCurrentWeather(state, ownProps.id)
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlace)
