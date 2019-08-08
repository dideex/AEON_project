import * as React from 'react'
import { Menu, MenuItem, IconButton, Avatar } from '@material-ui/core'

import { Context } from '../common'
import { RouterIconLink } from '../../types'
import { HeaderMobileMenuIcons } from './header-link'

interface IMobileMenu {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  mobileMenuId: string
  anchorEl: null | HTMLElement
  handleMenuClose: () => void
  icons: RouterIconLink[]
}

const MobileMenu: React.FC<IMobileMenu> = props => {
  const { handleProfileMenuOpen, mobileMenuId, anchorEl, handleMenuClose, icons } = props
  const { me } = React.useContext(Context)
  const labels = ['Feed', 'Friends', 'Messages', 'Notifications']
  const mobileIcons = icons.map((icon, i) => ({ ...icon, label: labels[i] }))
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <HeaderMobileMenuIcons icons={mobileIcons} />
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src={me.avatar} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu
