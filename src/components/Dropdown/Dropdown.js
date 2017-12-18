import React from 'react'
import { withStyles } from 'material-ui/styles'

const Dropdown = ({ open, classes, children }) =>
  open ? <div className={classes.root}> {children}</div> : null

const styles = ({ palette, shadows }) => ({
  root: {
    background: '#fff',
    position: 'absolute',
    top: 'calc(100% + 1px)',
    left: 0,
    width: '100%',
    boxShadow: shadows[3],
    color: palette.text.primary
  }
})
export default withStyles(styles)(Dropdown)
