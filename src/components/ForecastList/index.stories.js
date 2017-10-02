import React from 'react'
import { storiesOf } from '@storybook/react'
import forecastData from '../../../__mocks__/data/weather.text_forecast.json'
import ForecastList from '.'

const forecastDays = forecastData.filter(period => !period.title.includes('Night'))

const stories = storiesOf('Forecast List', module)
stories.add('10 Day Overview - fahrenheit', () => (
  <div className="storyWrapper" style={{ background: '#7288a5' }}>
    <ForecastList forecastDays={forecastDays} />
  </div>
))

stories.add('10 Day Overview - celsius', () => (
  <div className="storyWrapper" style={{ background: '#7288a5' }}>
    <ForecastList forecastDays={forecastDays} unit="celsius" />
  </div>
))
