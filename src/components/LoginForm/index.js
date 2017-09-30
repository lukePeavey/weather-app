import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../TextInput'
import { StyleSheet, css } from 'aphrodite'

class LoginForm extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <form className={css(styles.form)}>
          <div className={css(styles.formControl)}>
            <Field component={TextInput} name="username" type="text" placeholder="Username" />
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
