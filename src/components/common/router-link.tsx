import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import CoreLink from '@material-ui/core/Link'
import { RouteTypes } from '../../types'

interface ILink {
  to: RouteTypes
  className?: string
}

const Link: React.FC<ILink> = ({ children, to, className = '' }) => {
  return (
    <CoreLink
      className={className}
      color="textPrimary"
      underline="none"
      component={RouterLink}
      to={to}
    >
      {children}
    </CoreLink>
  )
}

export default Link
