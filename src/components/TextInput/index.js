import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Input from '../Input'
const inputTypes = ['text', 'email', 'password', 'url', 'tel', 'number', 'search']

export default class TextInput extends Component {
  static propTypes = {
    type: PropTypes.oneOf(inputTypes).isRequired,
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object
  }

  static defaultProps = {
    type: 'text',
    input: {}
  }

  state = {
    focused: false
  }

  handleBlur = event => {
    let { input } = this.props
    this.setState({ focused: false })
    if (input && input.onBlur) input.onBlur()
  }

  handleFocus = event => {
    let { input } = this.props
    this.setState({ focused: true })
    if (input && input.onBlur) input.onBlur()
  }

  render() {
    let { input, ...props } = this.props
    return (
      <div className={css(styles.field, this.state.focused && styles.focus)}>
        <Input
          {...props}
          {...input}
          styles={styles.input}
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
    borderWidth: 0
  }
})
