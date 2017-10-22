import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { storiesOf } from '@storybook/react'
import WeatherIcon from '.'

const req = require.context('../../../public/weather-icons/', false, /.svg$/)
const dayIcons = req.keys().filter(filename => !filename.includes('nt_'))
const nightIcons = req.keys().filter(filename => filename.includes('nt'))

storiesOf('Weather Icons', module).add('default', () => (
  <div className="storyWrapper">
    <div className={css(styles.container)}>
      <h3>Day Weather Icons</h3>
      {dayIcons.map(name => (
        <WeatherIcon className={css(styles.weatherIcon)} name={name.replace('.svg', '')} />
      ))}
    </div>
    <div className={css(styles.container)}>
      <h3>Night Weather Icons</h3>
      {nightIcons.map(name => (
        <WeatherIcon className={css(styles.weatherIcon)} name={name.replace('.svg', '')} />
      ))}
    </div>
  </div>
))

const styles = StyleSheet.create({
  weatherIcon: {
    width: 60,
    margin: 15
  },
  container: {
    width: '100%',
    marginBottom: '40'
  }
})
