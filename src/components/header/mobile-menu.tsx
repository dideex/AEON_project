import * as React from 'react'
import { Menu, MenuItem, IconButton, Badge, Theme } from '@material-ui/core'

import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  menuIcon: {
    color: theme.palette.text.primary,
  },
}))

interface IMobileMenu {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
  mobileMenuId: string
  anchorEl: null | HTMLElement
  handleMenuClose: () => void
}

const MobileMenu: React.FC<IMobileMenu> = props => {
  const { handleProfileMenuOpen, mobileMenuId, anchorEl, handleMenuClose } = props
  const classes = useStyles()
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
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon className={classes.menuIcon} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon className={classes.menuIcon} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle className={classes.menuIcon} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
}

export default MobileMenu
