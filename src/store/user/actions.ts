import { IUser } from './types'
import { IResponseError } from '../../api'

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
