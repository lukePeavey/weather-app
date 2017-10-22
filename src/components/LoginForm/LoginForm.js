import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../TextInput'
import Button from '../Button'
import { StyleSheet, css } from 'aphrodite/no-important'

/** The form displayed on the login page */
const LoginForm = ({ error, handleSubmit, pristine, reset, submitting, mySubmit }) => (
  <div className="wrapper">
    {error && <div className="alert error">{error}</div>}
    <form className={css(styles.form)}>
      <div className={css(styles.formControl)}>
        <Field component={TextInput} name="email" type="email" placeholder="Email" />
      </div>
      <div className={css(styles.formControl)}>
        <Field component={TextInput} name="password" type="password" placeholder="Password" />
      </div>
      <div className={css(styles.formControl)}>
        <Button onClick={handleSubmit(mySubmit)} styles={styles.buttons}>
          Login
        </Button>
      </div>
    </form>
  </div>
)

const styles = StyleSheet.create({
  form: {
    width: 450
  },
  formControl: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10
  },
  buttons: {
    width: '100%'
  }
})

export default LoginForm
