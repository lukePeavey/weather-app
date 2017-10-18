import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { StyleSheet, css } from 'aphrodite/no-important'
import TextInput from '../TextInput'
import Button from '../Button'
import { Link } from 'react-router-dom'

/** The form displayed on the login page */
const SignupForm = ({ handleSubmit, mySubmit, error, ...props }) => (
  <div className="wrapper">
    {error && <div className="alert error">{error}</div>}
    <form className={css(styles.form)}>
      <div className={css(styles.formControl)}>
        <Field
          component={TextInput}
          name="firstName"
          type="text"
          autoComplete="given-name"
          placeholder="First Name"
        />
      </div>
      <div className={css(styles.formControl)}>
        <Field
          component={TextInput}
          name="lastName"
          type="text"
          autoComplete="family-name"
          placeholder="Last Name"
        />
      </div>
      <div className={css(styles.formControl)}>
        <Field
          component={TextInput}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
        />
      </div>
      <div className={css(styles.formControl)}>
        <Field component={TextInput} name="password" type="password" placeholder="Enter Password" />
      </div>
      <div className={css(styles.formControl)}>
        <Field
          component={TextInput}
          name="password2"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className={css(styles.formControl)}>
        <Button onClick={handleSubmit(mySubmit)} styles={styles.button}>
          Register
        </Button>
      </div>
    </form>
    <Link to={{ pathname: '/login', state: { from: props.location } }}>Login</Link>
  </div>
)

const styles = StyleSheet.create({
  form: {
    maxWidth: 450
  },
  formControl: {
    display: 'flex',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    flex: '1 0 0'
  }
})

export default SignupForm
