import React from 'react'
import IconButton from 'material-ui/IconButton'
import { MenuIcon, ArrowBackIcon } from '../icons'

const MenuButton = ({ isPlacesMenuOpen, togglePlacesMenu, toggleNavDrawer, ...props }) => {
  const handleClick = isPlacesMenuOpen ? togglePlacesMenu(false) : toggleNavDrawer(true)
  return (
    <IconButton aria-label="Menu" color="inherit" onClick={handleClick} {...props}>
      {isPlacesMenuOpen ? <ArrowBackIcon /> : <MenuIcon />}
    </IconButton>
  )
}

export default MenuButton
