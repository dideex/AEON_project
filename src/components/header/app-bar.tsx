import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, Badge, Avatar } from '@material-ui/core'
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
import { Context, Link } from '../common'
import { RouteTypes } from '../../types'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

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

interface IHeaderIconLink {
  to: RouteTypes
  count: number
}
const HeaderIconLink: React.FC<IHeaderIconLink> = ({ to, children, count }) => {
  const classes = useStyles()
  return (
    <Link to={to}>
      <IconButton
        className={classes.iconButton}
        aria-label={`show ${count} new fields`}
        color="inherit"
      >
        <Badge badgeContent={count} color="secondary">
          {children}
        </Badge>
      </IconButton>
    </Link>
  )
}

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
  const icons: {
    to: RouteTypes
    count: number
    Icon: React.ComponentType<SvgIconProps>
  }[] = [
    { to: '/feed', count: 7, Icon: LibraryBooks },
    { to: '/friends', count: 2, Icon: SupervisorAccount },
    { to: '/chat', count: 5, Icon: MailIcon },
    { to: '/notifications', count: 17, Icon: NotificationsIcon },
  ]

  const getDesctopMenuIcons = () => (
    <div className={classes.sectionDesktop}>
      {icons.map(({ to, count, Icon }, i) => (
        <HeaderIconLink key={i} to={to} count={count}>
          <Icon className={classes.menuIcon} fontSize="large" />
        </HeaderIconLink>
      ))}
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
