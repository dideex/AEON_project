import { UserStore as US } from './types'

// TODO: Fix a re-exported type without --isolatedModules flag
export type UserStore = US
export { reducer, initialState } from './reducer'
