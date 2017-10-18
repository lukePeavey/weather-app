import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import { signupRequest } from '../store/auth/actions'

class SignupFormContainer extends Component {
  mySubmit = data => {
    return new Promise((resolve, reject) => {
      this.props.dispatch(signupRequest({ data, resolve, reject }))
    })
  }

  render() {
    if (this.props.submitSucceeded) {
      return <Redirect to="/login" />
    }
    return <SignupForm {...this.props} mySubmit={this.mySubmit} />
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(null, mapDispatchToProps)(
  reduxForm({
    form: 'signup'
  })(SignupFormContainer)
)
