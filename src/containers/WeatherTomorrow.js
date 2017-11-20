import { connect } from 'react-redux'
import WeatherToday from '../components/WeatherToday'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  forecast: fromState.getForecastDayByIndex(state, 1),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherToday)
