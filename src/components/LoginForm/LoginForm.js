import React from 'react'
import Form from '../Form'

const formSpec = {
  errors: [],
  buttons: [
    { name: 'resetPassword', label: 'Forgot Password', href: '/reset-password' },
    { name: 'submit', type: 'submit', label: 'Login', color: 'accent', raised: true }
  ],
  fields: [
    { name: 'email', label: 'Email Address', type: 'email', placeholder: '' },
    { name: 'password', label: 'Password', type: 'password', placeholder: '' }
  ]
}

const LoginForm = props => (
  <div>
    <Form formSpec={formSpec} {...props} />
    <div className="message" />
  </div>
)

export default LoginForm
