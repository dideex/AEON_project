import { IUserRequest, TMyInfo } from './user'

export interface IAuthStrategy {
  handleSubmit: (input: IUserRequest) => void
}
export interface IProfileStrategy {
  getMyProfile: () => TMyInfo | null
}

export interface IStrategy {
  authStrategy: IAuthStrategy
  profileStrategy: IProfileStrategy
}
