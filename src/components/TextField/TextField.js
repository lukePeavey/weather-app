import React from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Input from '../Input'

const TextField = props => {
  const { classes, className, label, id, input, type, placeholder, children } = props
  return (
    <div className={classnames(classes.formControl, className)}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <div className="field">
        <Input type={type} placeholder={placeholder} className={classes.input} {...input} />
      </div>
    </div>
  )
}

const styles = ({ palette, spacing, breakpoints, transitions }) => ({
  field: {
    position: 'relative',
    flex: '1 0 0',
    height: spacing.unit * 5,
    maxWidth: 500
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    color: palette.text.primary,
    display: 'inline-block',
    marginBottom: spacing.unit
  },
  formControl: {
    marginBottom: spacing.unit
  },
  input: {
    height: 'inherit',
    lineHeight: 'inherit',
    width: '100%',
    padding: '0.5rem 1rem',
    color: palette.input.inputText,
    border: '1px solid rgba(34,36,38,.15)',
    borderRadius: '.28571429rem',
    transitionDuration: transitions.duration.shortest,
    transitionProperty: 'background-color',
    '&:focus': {
      border: 'solid 1px',
      borderColor: '#85b7d9'
    }
  }
})

export default withStyles(styles)(TextField)
