import React from 'react'
import IconButton from 'material-ui/IconButton'
import { MenuIcon, ArrowBackIcon } from '../icons'

const MenuButton = ({ placesMenuActive, togglePlacesMenu, toggleNavDrawer, ...props }) => {
  const handleClick = placesMenuActive ? togglePlacesMenu(false) : toggleNavDrawer(true)
  return (
    <IconButton aria-label="Menu" color="inherit" onClick={handleClick} {...props}>
      {placesMenuActive ? <ArrowBackIcon /> : <MenuIcon />}
    </IconButton>
  )
}

export default MenuButton
