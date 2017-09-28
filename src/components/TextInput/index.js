import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

class TextInput extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'password',
      'url',
      'tel',
      'number'
    ]),
    name: PropTypes.string,
    input: PropTypes.object
  }

  static defaultProps = {
    type: 'text',
    input: {}
  }

  state = {
    focused: false
  }

  handleBlur = event => {
    this.setState({ focused: false })
    if (this.props.input.onBlur) this.props.input.onBlur()
  }

  handleFocus = event => {
    this.setState({ focused: true })
    if (this.props.input.onFocus) this.props.input.onFocus()
  }

  render() {
    let { input, ...props } = this.props
    return (
      <div className={css(styles.field, this.state.focused && styles.focus)}>
        <input
          {...input}
          {...props}
          className={css(styles.input)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    )
  }
}

const styles = StyleSheet.create({
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
    borderWidth: 0,
    fontSize: 15
  }
})

export default TextInput
