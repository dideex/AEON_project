import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import CoreLink from '@material-ui/core/Link'
import { RouteTypes } from '../../types'

interface ILink {
  to: RouteTypes
}

const Link: React.FC<ILink> = ({ children, to }) => {
  return (
    <CoreLink color="textPrimary" underline="none" component={RouterLink} to={to}>
      {children}
    </CoreLink>
  )
}

export default Link
