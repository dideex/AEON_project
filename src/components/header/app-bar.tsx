import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
} from '@material-ui/core'
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  SupervisorAccount,
  LibraryBooks,
} from '@material-ui/icons'

import Search from './search'
import MobileMenu from './mobile-menu'
import WebMenu from './web-menu'
import { Context } from '../common'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuIcon: {
      color: theme.palette.text.secondary,
    },
    iconButton: {
      margin: `0 ${theme.spacing(1)}px`,
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

const HeaderAppBar: React.FC = () => {
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

  const getDesctopMenuIcons = () => (
    <div className={classes.sectionDesktop}>
      <IconButton
        className={classes.iconButton}
        aria-label="show 7 new post"
        color="inherit"
      >
        <Badge badgeContent={7} color="secondary">
          <LibraryBooks className={classes.menuIcon} fontSize="large" />
        </Badge>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label="show 2 new friend invite"
        color="inherit"
      >
        <Badge badgeContent={2} color="secondary">
          <SupervisorAccount className={classes.menuIcon} fontSize="large" />
        </Badge>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label="show 4 new mail"
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <MailIcon className={classes.menuIcon} fontSize="large" />
        </Badge>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label="show 17 new notification"
        color="inherit"
      >
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon className={classes.menuIcon} fontSize="large" />
        </Badge>
      </IconButton>
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

          {getDesctopMenuIcons()}
          {getMobileMenuIcons()}
        </Toolbar>
      </AppBar>
      <MobileMenu
        anchorEl={mobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
        handleMenuClose={handleMobileMenuClose}
      />
      <WebMenu anchorEl={anchorEl} menuId={menuId} handleMenuClose={handleMenuClose} />
    </div>
  )
}
export default HeaderAppBar
