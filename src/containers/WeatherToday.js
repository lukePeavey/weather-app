import { connect } from 'react-redux'
import WeatherToday from '../components/WeatherToday'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  conditions: fromState.getCurrentWeather(state),
  forecast: fromState.getForecastDayByIndex(state, 0),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherToday)
