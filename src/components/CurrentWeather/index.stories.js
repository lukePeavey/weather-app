import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { storiesOf } from '@storybook/react'
import CurrentWeather from '.'
import data from '../../../__mocks__/data/weather.current.json'

const stories = storiesOf('Current Weather', module)

stories.add('Overcast', () => (
  <div className={css(styles.wrapper)}>
    <CurrentWeather conditions={data} />
  </div>
))

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    background: 'linear-gradient(to bottom, #7288a5, rgba(114, 136, 165, 0.9))'
  }
})
