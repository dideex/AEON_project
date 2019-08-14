import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@material-ui/core'
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  SupervisorAccount,
  LibraryBooks,
} from '@material-ui/icons'

import Search from './search'
import MobileMenu from './mobile-menu'
import ProfileMenu from './profile-menu'
import { HeaderMenuIcons } from './header-link'
import { Context } from '../common'
import { RouterIconLink } from '../../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuIcon: {
      color: theme.palette.text.secondary,
    },
    root: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    sectionMobile: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
)

export interface IHeaderAppBar {
  isLoading?: boolean
}

const HeaderAppBar: React.FC<IHeaderAppBar> = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(
    null,
  )
  const { me } = React.useContext(Context)

  function handleProfileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null)
  }

  function handleMenuClose() {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  function handleMobileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const mobileMenuId = 'primary-search-account-menu-mobile'
  const menuId = 'primary-search-account-menu'
  // prettier-ignore
  const icons: RouterIconLink[] = [
    { to: '/feed', count: me.socialStatistic.posts, Icon: LibraryBooks },
    { to: '/friends', count: me.socialStatistic.invites, Icon: SupervisorAccount },
    { to: '/chat', count: me.socialStatistic.messages, Icon: MailIcon },
    { to: '/notifications', count: me.socialStatistic.notifications, Icon: NotificationsIcon, },
  ]

  const getDesktopMenuIcons = () => (
    <div className={classes.sectionDesktop}>
      <HeaderMenuIcons icons={icons} />
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Avatar src={me.avatar} />
      </IconButton>
    </div>
  )

  const getMobileMenuIcons = () => (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon className={classes.menuIcon} />
      </IconButton>
    </div>
  )

  return (
    <div className={classes.grow}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap color="textSecondary">
            AEON
          </Typography>
          <Search />
          <div className={classes.grow} />

          {getDesktopMenuIcons()}
          {getMobileMenuIcons()}
        </Toolbar>
      </AppBar>
      <MobileMenu
        anchorEl={mobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
        handleMenuClose={handleMobileMenuClose}
        icons={icons}
      />
      <ProfileMenu
        anchorEl={anchorEl}
        menuId={menuId}
        handleMenuClose={handleMenuClose}
      />
    </div>
  )
}
export default HeaderAppBar
