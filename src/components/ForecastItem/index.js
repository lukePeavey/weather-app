import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import WeatherIcon from '../WeatherIcon'

const ForecastItem = ({ forecastText, unit }) => {
  const text = forecastText[unit === 'celsius' ? 'fcttext_metric' : 'fcttext']
  return (
    <section className={css(styles.forecastItem)}>
      <WeatherIcon className={css(styles.icon)} name={forecastText.icon} />
      <div className={css(styles.section)}>
        <h4 className={css(styles.subHeading)}>{forecastText.title}</h4>
        <div className="text">{text}</div>
      </div>
    </section>
  )
}

ForecastItem.propTypes = {
  forecastText: PropTypes.shape({
    day: PropTypes.object.isRequired,
    night: PropTypes.object.isRequired
  }).isRequired,
  unit: PropTypes.oneOf(['celsius', 'fahrenheit']).isRequired
}

const styles = StyleSheet.create({
  forecastItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.04)',
    color: '#f1f1f1',
    marginBottom: 20,
    padding: 14
  },
  night: {
    marginTop: 8
  },
  icon: {
    width: 50,
    flex: '0 0 50px',
    marginRight: 20
  },
  subHeading: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 4,
    marginTop: 8
  }
})

export default ForecastItem
