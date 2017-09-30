import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const Input = ({ styles: customStyles, ...props }) => (
  <input className={css(styles.input, customStyles)} {...props} />
)

const styles = StyleSheet.create({
  input: {
    display: 'block',
    width: '100%',
    border: 'none',
    borderRadius: 0,
    fontSize: '1rem',
    lineHeight: '1.5',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    ':focus': {
      outline: 'none'
    },
    '::placeholder': {
      color: 'rgba(0,0,0,0.35)'
    }
  }
})

export default Input
