import * as React from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import { Link } from '../common'
import { RouteLink } from '../../types'

interface IProfileMenu {
  menuId: string
  anchorEl: null | HTMLElement
  handleMenuClose: () => void
}

const ProfileMenu: React.FC<IProfileMenu> = ({ anchorEl, menuId, handleMenuClose }) => {
  const links: RouteLink[] = [
    { to: '/me', label: 'Account' },
    { to: '/me/gallery', label: 'Gallery' },
    { to: '/settings', label: 'Settings' },
    { to: '/logout', label: 'Logout' },
  ]
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
      {links.map(({ to, label }) => (
        <Link key={to} to={to}>
          <MenuItem onClick={handleMenuClose}>{label}</MenuItem>
        </Link>
      ))}
    </Menu>
  )
}

export default ProfileMenu
