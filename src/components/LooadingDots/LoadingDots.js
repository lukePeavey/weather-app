import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'

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
const LoadingDots = ({ size, color, className, ...props }) => {
  let dotSize = { height: size, width: size, margin: `0 ${size * (0.875 / 2)}px` }
  let dotStyle = { ...dotSize, background: color }
  return (
    <div className={classNames(classes.loadingDots, className)} {...props}>
      <div className={classes.dot} style={dotStyle} />
      <div className={classes.dot} style={dotStyle} />
      <div className={classes.dot} style={dotStyle} />
    </div>
  )
}

const styles = {
  '@keyframe bounce': {
    '0%, 80%, 100%': { transform: 'scale(0)', opacity: 0.35 },
    '40%': { transform: 'scale(1)', opacity: 1 }
  },
  loadingDots: {
    display: 'inline-block'
  },
  dot: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '100%',
    animationName: 'bounce',
    animationDuration: '1.4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    '&:nth-child(1)': {
      animationDelay: '-0.32s'
    },
    '&:nth-child(2)': {
      animationDelay: '-0.16s'
    }
  }
}

LoadingDots.propTypes = propTypes
LoadingDots.defaultProps = defaultProps

export default withStyles(styles)(LoadingDots)
