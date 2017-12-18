import { connect } from 'react-redux'
import WeatherForecast from '../../components/Weather/TenDayForecast'
import * as fromState from '../../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  days: fromState.getForecastDays(state),
  unit: fromState.getUnit(state)
})

export default connect(mapStateToProps, null)(WeatherForecast)
