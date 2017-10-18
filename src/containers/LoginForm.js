import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { loginRequest } from '../store/auth/actions'

/**
 * The login form container provides event event handlers to
 * the login form, which a wrapped redux-form component.
 */
class LoginFormContainer extends Component {
  /**
   * onSubmit handler for the login form.
   * This dispatches the loginRequest action when the login form is submitted.
   * The
   */
  mySubmit = credentials => {
    return new Promise((resolve, reject) => {
      this.props.dispatch(loginRequest({ credentials, resolve, reject }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.submitSucceeded) {
      return <Redirect to={from} />
    }
    return <LoginForm {...this.props} mySubmit={this.mySubmit} />
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'login'
  })(LoginFormContainer)
)
