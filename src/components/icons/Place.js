import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import get from 'lodash/get'

/** Place Icon  */
const PlaceIcon = ({ color, size, styles: customStyles, ...props }) => {
  let inlineStyles = get(props, 'style', {})
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={css(styles.icon, customStyles)} style={inlineStyles}>
      <svg className={css(styles.svg)} viewBox="0 0 24 24" height="24" width="24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

PlaceIcon.propTypes = {
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
    color: 'inherit'
  },
  svg: {
    width: '100%',
    height: 'auto',
    color: 'inherit'
  }
})

export default PlaceIcon
