import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { signupRequest } from '../store/auth/actions'

/**
 * Container for the the SignupForm component (user registration form)
 * Same setup as the login form: form state is managed with redux-form.
 * The container provides event handlers for form submission etc.
 *
 * @todo Add field level validation
 */
class SignupFormContainer extends Component {
  /**
   * onSubmit handler for the signup form.
   * This dispatches the signupRequest action when the form is submitted,
   * passing it the form data and resolve/reject callbacks as the payload.
   * The signup saga will handle the actual registration process. The
   * onSubmit handler will wait for the saga to resolve/reject.
   */
  onSubmit = data => {
    return new Promise((resolve, reject) => {
      this.props.dispatch(signupRequest({ data, resolve, reject }))
    })
  }

  render() {
    if (this.props.submitSucceeded) {
      // If form submission completes successfully, redirect user to login page.
      return <Redirect to="/auth/login" />
    }
    return <SignupForm onSubmit={this.onSubmit} {...this.props} />
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'signup'
  })(SignupFormContainer)
)
