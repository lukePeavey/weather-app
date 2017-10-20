import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

/**
 * A wrapper component for SVG icons
 */
const Icon = ({ color, size, styles: customStyles, children, ...props }) => {
  let inlineStyles = Object(props.style)
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={css(styles.icon, customStyles && customStyles)} style={inlineStyles}>
      {children}
    </div>
  )
}

Icon.propTypes = {
  /** The SVG icon element to render */
  children: PropTypes.element.isRequired,
  /** Sets the icon size (in pixels). The default size is 20 */
  size: PropTypes.number,
  /** Sets icon color. By default icons will inherit the text color of their parent (currentColor) */
  color: PropTypes.string,
  /** Aphrodite styles. These be merged with the base styles for the wrapper element, overwriting defaults */
  styles: PropTypes.object,
  /** Inline style object. Will be passed to the wrapper element */
  style: PropTypes.object
}

const styles = StyleSheet.create({
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginRight: 10
  }
})

export default Icon
