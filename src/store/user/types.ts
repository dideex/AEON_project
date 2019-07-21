import { IResponseError } from '../../api'
import * as actions from './actions'
import { InferValueTypes } from '../types'

export type TLoading = 'IDLE' | 'LOADING' | 'LOADED' | 'ERROR'

export interface IUser {
  userName: string
  avatar: string
  age: number
  email: string
  gender: 'man' | 'woman' | null
}

export interface INetworkStatus {
  loading: TLoading
}

export interface INetworkError {
  error?: IResponseError
}

export type UserStore = IUser & INetworkStatus & INetworkError

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
