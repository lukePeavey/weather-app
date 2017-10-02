import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import ForecastItem from '../ForecastItem'

const ForecastList = ({ forecastDays, unit }) => {
  return (
    <div className={css(styles.forecastList)}>
      {forecastDays.map(forecast => <ForecastItem forecastText={forecast} unit={unit} />)}
    </div>
  )
}

ForecastList.propTypes = {
  forecastDays: PropTypes.array.isRequired,
  unit: PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired
}

const styles = StyleSheet.create({
  forecastList: {
    display: 'flex',
    flexDirection: 'column',
    width: 700,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default ForecastList
