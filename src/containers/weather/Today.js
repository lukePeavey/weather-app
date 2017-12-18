import { connect } from 'react-redux'
import WeatherToday from '../../components/Weather/Today'
import * as fromState from '../../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  conditions: fromState.getForecastCurrent(state),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherToday)
