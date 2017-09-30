import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

/** Expand More Icon  */
const ExpandMoreIcon = ({ color, size, style }) => {
  let inlineStyles = { ...Object(style) }
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={css(styles.icon)} style={inlineStyles}>
      <svg className={css(styles.svg)} viewBox="0 0 24 24" height="24" width="24">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  )
}

ExpandMoreIcon.propTypes = {
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

export default ExpandMoreIcon
