import React from 'react'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'

const styles = ({ palette }) => {
  const placeholder = {
    color: palette.input.helperText,
    fontSize: 14
  }
  return {
    root: {
      '-webkit-appearance': 'none',
      display: 'block',
      width: '100%',
      fontSize: '1rem',
      lineHeight: '1.5',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: 0,
      '&::placeholder': placeholder,
      '&:focus': {
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#fff'
      }
    }
  }
}

/** A generic input component */
const Input = ({ classes, className, ...props }) => (
  <input className={classnames(classes.root, className)} {...props} />
)

export default withStyles(styles)(Input)
