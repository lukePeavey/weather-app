import React from 'react'
import Form from '../Form'

const formSpec = {
  errors: [],
  buttons: [
    { name: 'cancel', type: 'button', label: 'Not Right Now', href: '/' },
    { name: 'submit', type: 'submit', label: 'Signup', color: 'accent', raised: true }
  ],
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', placeholder: '' },
    { name: 'lastName', label: 'Last Name', type: 'text', placeholder: '' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: '' },
    { name: 'password', label: 'Password', type: 'password', placeholder: '' }
  ]
}
const SignupForm = props => <Form formSpec={formSpec} {...props} />

export default SignupForm
