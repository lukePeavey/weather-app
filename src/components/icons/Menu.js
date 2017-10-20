import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import get from 'lodash/get'

/** Menu Icon  */
const MenuIcon = ({ color, size, styles: customStyles, ...props }) => {
  let inlineStyles = get(props, 'style', {})
  if (color) inlineStyles = { ...inlineStyles, color }
  if (size) inlineStyles = { ...inlineStyles, width: size, height: size }
  return (
    <div className={css(styles.icon, customStyles)} style={inlineStyles}>
      <svg className={css(styles.svg)} viewBox="0 0 24 24" height="24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
  )
}

MenuIcon.propTypes = {
  /** Sets icon color. Default is inherit */
  color: PropTypes.string,
  /** Sets the icon size (in pixels). Default is 24 */
  size: PropTypes.number
}

const styles = StyleSheet.create({
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    color: 'inherit'
  },
  svg: {
    width: '100%',
    height: 'auto',
    color: 'inherit'
  }
})

export default MenuIcon
