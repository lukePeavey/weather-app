import React from 'react'
import * as utils from '../../../utils/weatherUtils'
import WeatherIcon from '../../WeatherIcon'
import { getIconName } from '../../../utils/weatherUtils'
import moment from 'moment'

export default function ForecastItem({ classes, data, unit }) {
  return (
    <section className={classes.item}>
      <WeatherIcon className={classes.icon} name={getIconName(data)} />
      <div className={classes.section}>
        <h4 className={classes.subHeading}>{new moment(data.date.epoch * 1000).format('dddd')}</h4>
        <div className="text">{utils.getForecastDaySummary(data, unit)}</div>
      </div>
    </section>
  )
}
