import * as React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

interface IWebMenu {
  menuId: string
  anchorEl: null | HTMLElement
  handleMenuClose: () => void
}

const WebMenu: React.FC<IWebMenu> = ({ anchorEl, menuId, handleMenuClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Gallery</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
    </Menu>
  )
}

export default WebMenu
