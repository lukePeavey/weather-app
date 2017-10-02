import React from 'react'
import { storiesOf } from '@storybook/react'
import ForecastItem from '.'

// prettier-ignore
const forecastDay = {
  icon: 'partlycloudy',
  title: 'Monday',
  fcttext: 'Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 77F. Winds light and variable.',
  fcttext_metric: "Partly cloudy skies. High near 25C. Winds light and variable."
}
const forecastNight = {
  icon: 'nt_clear',
  title: 'Monday Night',
  fcttext: 'Mainly clear early, then a few clouds later on. Low 61F. Winds light and variable.',
  fcttext_metric: 'Partly cloudy. Low 16C. Winds light and variable.'
}

const stories = storiesOf('Forecast Item', module)
stories.add('Day fahrenheit', () => (
  <div className="storyWrapper">
    <ForecastItem forecastText={forecastDay} unit="fahrenheit" />
  </div>
))

stories.add('Day celsius ', () => (
  <div className="storyWrapper">
    <ForecastItem forecastText={forecastDay} unit="Celsius" />
  </div>
))

stories.add('Night fahrenheit', () => (
  <div className="storyWrapper">
    <ForecastItem forecastText={forecastNight} unit="fahrenheit" />
  </div>
))

stories.add('Night celsius ', () => (
  <div className="storyWrapper">
    <ForecastItem forecastText={forecastNight} unit="Celsius" />
  </div>
))
