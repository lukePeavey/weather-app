import { connect } from 'react-redux'
import WeatherForecast from '../components/WeatherForecast'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  days: fromState.getForecastDays(state),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherForecast)
