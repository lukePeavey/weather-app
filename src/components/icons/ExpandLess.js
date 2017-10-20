import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import get from 'lodash/get'

/** Expand Less Icon  */
const ExpandLessIcon = ({ color, size, styles: customStyles, ...props }) => {
  let inlineStyles = get(props, 'style', {})
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={css(styles.icon, customStyles)} style={inlineStyles}>
      <svg className={css(styles.svg)} viewBox="0 0 24 24" height="24" width="24">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

ExpandLessIcon.propTypes = {
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

export default ExpandLessIcon
