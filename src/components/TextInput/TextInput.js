import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input from '../Input'
const inputTypes = ['text', 'email', 'password', 'url', 'tel', 'number', 'search']

const styles = {
  field: {
    height: 40,
    maxWidth: 450,
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: 4,
    width: '100%',
    overflow: 'auto',
    transition: 'all 90ms'
  },
  focus: {
    borderColor: '#00CCEB'
  },
  input: {
    height: 36,
    padding: '0 24px',
    borderStyle: 'solid',
    borderWidth: 0
  }
}

/** Basic text input component */
class TextInput extends Component {
  static propTypes = {
    /** The input type */
    type: PropTypes.oneOf(inputTypes).isRequired,
    /** The label that will be displayed for the input */
    label: PropTypes.string,
    /** Input props passed to component by reduxForm  */
    input: PropTypes.object,
    /** Meta props passed to component by reduxForm */
    meta: PropTypes.object
  }

  static defaultProps = {
    type: 'text',
    input: {}
  }

  render() {
    let { input, classes, ...props } = this.props
    return (
      <div className={classes.field}>
        <Input
          {...props}
          {...input}
          className={classes.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    )
  }
}
export default withStyles(styles)(TextInput)
