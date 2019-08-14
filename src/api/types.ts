/* eslint-disable @typescript-eslint/camelcase */
import { IUser } from '../store/user/types'

export const incorrect_login_or_password = 'incorrect_login_or_password'
interface IResponseErrorLogOrPwd {
  errorText: typeof incorrect_login_or_password
}

export type TSuccessStatus = 200 | 203 | 300
export type TErrorStatus = 404 | 500
export type TResponseStatus = TSuccessStatus | TErrorStatus

export type IResponseError = IResponseErrorLogOrPwd | null

export interface IAuthResponse {
  status: TResponseStatus
  data?: IUser
  errorText?: IResponseError
}
