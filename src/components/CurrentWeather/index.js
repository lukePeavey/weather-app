import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import WeatherIcon from '../WeatherIcon'

export default class CurrentWeather extends PureComponent {
  static propTypes = {
    conditions: PropTypes.object.isRequired,
    unit: PropTypes.oneOf(['celsius, fahrenheit']).isRequired
  }
  static defaultProps = {
    unit: 'fahrenheit'
  }

  render() {
    const { unit, conditions } = this.props
    const { weather, icon } = conditions
    const temp = conditions[`temp_${unit.charAt(0)}`]

    return (
      <main className={css(styles.currentWeather)}>
        <section className={css(styles.temp)}>{temp}</section>
        <section className={css(styles.conditions)}>
          <div className={css(styles.text)}>{weather}</div>
          <WeatherIcon className={css(styles.icon)} name={icon} />
        </section>
      </main>
    )
  }
}

const styles = StyleSheet.create({
  currentWeather: {
    display: 'flex'
  },
  temp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15,
    color: '#fff',
    fontSize: 200
  },
  conditions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    padding: 15,
    color: '#fff'
  },
  text: {
    fontSize: 20,
    marginBottom: 15
  },
  icon: {
    width: 80
  }
})
