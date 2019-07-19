import { UserStore } from './types'

// TODO: Fix a re-exported type without --isolatedModules flag
export type UserStore = UserStore
export { reducer, initialState } from './reducer'
