import { SvgIconProps } from '@material-ui/core/SvgIcon'

import { InferValueTypes } from './common'
import * as routes from '../constants/routes'

export type RouteTypes = InferValueTypes<typeof routes>

export interface RouteLink {
  to: RouteTypes
  label: string
}
export interface RouterIconLink {
  to: RouteTypes
  count: number
  Icon: React.ComponentType<SvgIconProps>
  label?: string
}
