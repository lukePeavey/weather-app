import { connect } from 'react-redux'
import WeatherTomorrow from '../components/WeatherTomorrow'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  forecast: fromState.getForecastDayByIndex(state, 1),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherTomorrow)
