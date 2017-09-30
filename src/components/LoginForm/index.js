import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../TextInput'
import { StyleSheet, css } from 'aphrodite'

/** The form displayed on the login page */
class LoginForm extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <form className={css(styles.form)}>
          <div className={css(styles.formControl)}>
            <Field component={TextInput} name="email" type="email" placeholder="Email" />
          </div>
          <div className={css(styles.formControl)}>
            <Field component={TextInput} name="password" type="password" placeholder="Password" />
          </div>
        </form>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: 450
  },
  formControl: {
    marginTop: 10,
    marginBottom: 10
  }
})

export default reduxForm({
  form: 'login'
})(LoginForm)
