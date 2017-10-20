import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const propTypes = {
  /** The color of the loading dots */
  color: PropTypes.string,
  /** The size of the dots in the loading animation */
  size: PropTypes.number,
  /** Custom styles to apply to the container element. Expects an Aphrodite style object */
  styles: PropTypes.object
}

const defaultProps = {
  color: '#999',
  size: 7
}

/**
 * A loading animation with three horizontal dots. This will be used as a
 * loading indicator in several UI components like the search bar's
 * autocomplete dropdown. The size and color of the dots can be set via props.
 */
const LoadingDots = ({ size, color, styles: customStyles }) => {
  let dotSize = { height: size, width: size, margin: `0 ${size * (0.875 / 2)}px` }
  let dotStyle = { ...dotSize, background: color }
  return (
    <div className={css(styles.loadingDots, customStyles)}>
      <div className={css(styles.dot)} style={dotStyle} />
      <div className={css(styles.dot)} style={dotStyle} />
      <div className={css(styles.dot)} style={dotStyle} />
    </div>
  )
}

const bounceKeyframe = {
  '0%, 80%, 100%': { transform: 'scale(0)', opacity: 0.35 },
  '40%': { transform: 'scale(1)', opacity: 1 }
}

const styles = StyleSheet.create({
  loadingDots: {
    display: 'inline-block'
  },
  dot: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '100%',
    animationName: [bounceKeyframe],
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    ':nth-child(1)': {
      animationDelay: '-0.32s'
    },
    ':nth-child(2)': {
      animationDelay: '-0.16s'
    }
  }
})

LoadingDots.propTypes = propTypes
LoadingDots.defaultProps = defaultProps

export default LoadingDots
