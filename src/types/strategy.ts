import { IUserRequest, TMyInfo } from './user'

export interface IAuthStrategy {
  handleSubmit: (input: IUserRequest) => void
}
export interface IMyProfileStrategy {
  getMyProfile: () => TMyInfo | null
}

export interface IStrategy {
  authStrategy: IAuthStrategy
  myProfileStrategy: IMyProfileStrategy
}
