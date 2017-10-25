import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'

const styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    marginRight: 0
  },
  svg: {
    width: '100%',
    height: 'auto'
  }
}
/**
 * A wrapper component for SVG icons
 */
const Icon = ({ classes, className, children, ...props }) => (
  <div className={classnames(classes.root, className)} {...props}>
    {Children.map(children, el => cloneElement(el, { className: classes.svg }))}
  </div>
)

Icon.propTypes = {
  /** The SVG icon element to render */
  children: PropTypes.element.isRequired,
  /** Use className to customize the styles of the root element with JSS styles or external css */
  className: PropTypes.string,
  /** Inline style object. Will be passed to the wrapper element */
  style: PropTypes.object
}

export default withStyles(styles)(Icon)
