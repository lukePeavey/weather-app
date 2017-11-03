import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { loginRequest } from '../store/auth/actions'
import { Link } from 'react-router-dom'

/**
 * Container for the the LoginForm component. Form state is managed with
 * redux-form. The container provides event handlers for form submission
 * and other events.
 *
 * @todo Add synchronous field level validation
 */
class LoginFormContainer extends Component {
  /**
   * onSubmit handler for the login form.
   * This dispatches the loginRequest action when the login form is submitted,
   * passing it the form data and resolve/reject callbacks as the payload.
   * The login saga will handle the actual authentication process.
   */
  onSubmit = credentials => {
    return new Promise((resolve, reject) => {
      this.props.dispatch(loginRequest({ credentials, resolve, reject }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.submitSucceeded) {
      // When form submission completes successfully, redirect back to the
      // previous location. This will take the user back to where they were
      // before they navigated to the login screen.
      return <Redirect to={from} />
    }
    return <LoginForm onSubmit={this.onSubmit} {...this.props} />
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'login'
  })(LoginFormContainer)
)
