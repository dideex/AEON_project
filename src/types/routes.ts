import { InferValueTypes } from './common'
import * as routes from '../constants/routes'

export type RouteTypes = InferValueTypes<typeof routes>
