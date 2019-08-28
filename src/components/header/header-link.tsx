import * as React from 'react'
import { IconButton, Badge, Theme, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { RouteTypes, RouterIconLink } from '../../types'
import { Link } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    margin: `0 ${theme.spacing(1)}px`,
  },
  menuBadge: {
    color: theme.palette.text.secondary,
  },
  wrap: {
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    color: 'white',
  },
}))

interface IHeaderIconLink {
  to: RouteTypes
  count: number
  label?: string
}
const HeaderIconLink: React.FC<IHeaderIconLink> = props => {
  const { to, children, count, label } = props
  const classes = useStyles()
  return (
    <Link to={to} className={classes.wrap}>
      <IconButton
        className={classes.iconButton}
        aria-label={`show ${count} new fields`}
        color="inherit"
      >
        <Badge badgeContent={count} color="secondary" classes={{ badge: classes.badge }}>
          {children}
        </Badge>
      </IconButton>
      {label && <p>{label}</p>}
    </Link>
  )
}

interface IHeaderMenuIcons {
  icons: RouterIconLink[]
}
export const HeaderMenuIcons: React.FC<IHeaderMenuIcons> = ({ icons }) => {
  const classes = useStyles()
  return (
    <>
      {icons.map(({ Icon, ...rest }, i) => (
        <HeaderIconLink key={i} {...rest}>
          <Icon className={classes.menuBadge} fontSize="large" />
        </HeaderIconLink>
      ))}
    </>
  )
}

export const HeaderMobileMenuIcons: React.FC<IHeaderMenuIcons> = ({ icons }) => (
  <>
    {icons.map(({ Icon, ...rest }, i) => (
      <MenuItem key={i}>
        <HeaderIconLink {...rest}>
          <Icon fontSize="default" />
        </HeaderIconLink>
      </MenuItem>
    ))}
  </>
)
