import { connect } from 'react-redux'
import SavedPlace from '../../components/PlacesMenu/SavedPlace'
import * as fromState from '../../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  place: fromState.getPlace(state, ownProps.id),
  weather: fromState.getForecastCurrent(state, ownProps.id),
  unit: fromState.getUnit(state)
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SavedPlace)
