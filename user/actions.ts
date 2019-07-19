import { IUser } from './types'
import { IResponseError } from '../../api'

export const init = () => ({ type: 'init' } as const)

export const reset = () => ({ type: 'reset' } as const)

export const inc = (val: number) =>
  ({
    type: 'inc',
    payload: { val },
  } as const)

export const getUserDataRequest = () => ({ type: 'getUserDataRequest' } as const)

export const getUserDataSuccess = (user: IUser) =>
  ({
    type: 'getUserDataSuccess',
    payload: { user },
  } as const)

export const getUserDataFail = (err: IResponseError) =>
  ({
    type: 'getUserDataFail',
    payload: { err },
  } as const)
