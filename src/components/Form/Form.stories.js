import React from 'react'
import { storiesOf } from '@storybook/react'
import { reduxForm, Field } from 'redux-form'
import Form from '.'

const signFormSpec = {
  errors: [],
  buttons: [
    { name: 'cancel', type: 'button', label: 'cancel' },
    { name: 'submit', type: 'submit', label: 'Login', color: 'primary' }
  ],
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'John' },
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Appleseed' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@apples.com' },
    { name: 'password', label: 'Password', type: 'password', placeholder: '' }
  ]
}
const loginFormSpec = {
  errors: [],
  buttons: [
    { name: 'cancel', type: 'button', label: 'cancel' },
    { name: 'submit', type: 'submit', label: 'Login', color: 'primary' }
  ],
  fields: [
    { name: 'email', label: 'Email Address', type: 'email', placeholder: '' },
    { name: 'password', label: 'Password', type: 'password', placeholder: '' }
  ]
}

const SignupForm = reduxForm({
  form: 'storybook-signup'
})(Form)

const LoginForm = reduxForm({
  form: 'storybook-login'
})(Form)

const wrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const formStyles = {
  maxWidth: 450,
  width: '90%'
}

storiesOf('Form', module)
  .add('Signup Form', () => (
    <div style={wrapperStyles}>
      <div style={formStyles}>
        <SignupForm formSpec={signFormSpec} />
      </div>
    </div>
  ))
  .add('Login Form', () => (
    <div style={wrapperStyles}>
      <div style={formStyles}>
        <LoginForm formSpec={loginFormSpec} />
      </div>
    </div>
  ))
