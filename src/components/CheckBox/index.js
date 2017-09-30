import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import Input from '../Input'

/** A custom CheckBox component, designed for use with Redux Forms */
export default class CheckBox extends Component {
  static propTypes = {
    /** The label that will be displayed with the checkbox */
    label: PropTypes.string,
    /** An object containing input props that will be passed to the html input */
    input: PropTypes.object.isRequired,
    /** Additional meta data props. See ReduxForm */
    meta: PropTypes.object
  }

  handleClick = () => {
    this.props.input.onChange(!this.props.input.value)
  }
  render() {
    let { label, input: { name, ...rest } } = this.props
    let inputProps = { name, ...rest }
    let isChecked = inputProps.value ? 'isChecked' : ''
    return (
      <label htmlFor={name} className={css(styles.checkBox)} onClick={this.handleClick}>
        <Input type="checkbox" styles={styles.input} {...inputProps} />
        <div className={css(styles.control, styles[isChecked])}>
          <svg className={css(styles.check, styles[isChecked])} viewBox="0 0 24 24">
            <path fill="none" d="M6,11.3 L10.3,16 L18,6.2" />
          </svg>
        </div>
        <div>{label}</div>
      </label>
    )
  }
}

const styles = StyleSheet.create({
  checkBox: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    color: '#999',
    marginRight: 12
  },
  control: {
    position: 'relative',
    width: 24,
    height: 24,
    border: '2px solid #999',
    borderRadius: 4,
    marginRight: 8
  },
  check: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 24,
    height: 24,
    strokeWidth: 3,
    stroke: 'transparent'
  },
  input: {
    height: 0,
    width: 0,
    opacity: 0
  },
  isChecked: {
    borderColor: '#865CD6',
    stroke: '#865CD6'
  }
})
