import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { withStyles } from 'material-ui/styles'
import TextField from '../TextField'
import Button from 'material-ui/Button'

const Form = ({ formSpec, handleSubmit, error, message, classes, ...props }) => (
  <div className={classes.root}>
    {error && <div className={classes.error}>{error}</div>}
    <form className={classes.form} onSubmit={handleSubmit(props.onSubmit)}>
      {formSpec.fields.map(({ name, ...inputProps }) => (
        <Field
          component={TextField}
          className={classes.formControl}
          name={name}
          props={inputProps}
          key={name}
        />
      ))}
      <div className={classes.actions}>
        {formSpec.buttons.map(({ label, children, ...buttonProps }) => (
          <Button {...buttonProps} className={classes.button} key={buttonProps.name}>
            {children || label}
          </Button>
        ))}
      </div>
    </form>
    {message && <div className={classes.message}>{message}</div>}
  </div>
)

const styles = ({ palette, spacing }) => ({
  root: {
    width: '100%',
    margin: '0 auto'
  },
  error: {
    color: palette.error[500],
    marginBottom: spacing.unit * 2
  },
  form: {
    width: '100%',
    margin: 0,
    padding: 0
  },
  formControl: {
    width: '100%',
    marginBottom: 16
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginLeft: 8,
    marginRight: 8,
    '&:last-of-type': {
      marginRight: 0
    }
  },
  message: {
    marginTop: 20
  }
})

export default withStyles(styles)(Form)
