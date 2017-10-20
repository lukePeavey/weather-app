import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import get from 'lodash/get'

/** Geolocation Icon  */
const LocationIcon = ({ color, size, styles: customStyles, ...props }) => {
  let inlineStyles = get(props, 'style', {})
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={`${css(styles.icon, customStyles)} ui-icon`} style={inlineStyles}>
      <svg className={css(styles.svg)} viewBox="0 0 24 24" height="24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
      </svg>
    </div>
  )
}

LocationIcon.propTypes = {
  /** Sets icon color. Default is inherit */
  color: PropTypes.string,
  /** Sets the icon size (in pixels). Default is 24 */
  size: PropTypes.number
}

const styles = StyleSheet.create({
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    color: 'inherit',
    marginRight: 5
  },
  svg: {
    width: '100%',
    height: 'auto',
    color: 'inherit'
  }
})

export default LocationIcon
