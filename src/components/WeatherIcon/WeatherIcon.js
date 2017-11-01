import React from 'react'

/** Renders a weather icon  */
const WeatherIcon = ({ name, alt, ...props }) => (
  <img src={`weather-icons/${name}.svg`} alt={name || alt} {...props} />
)

export default WeatherIcon
