import { IUserRequest, TMyInfo, IUserProfileInfo } from './user'

export interface IAuthStrategy {
  handleSubmit: (input: IUserRequest) => void
}

interface IProfileResponse {
  response: TMyInfo | IUserProfileInfo | null
  loading: boolean
}
export interface IProfileStrategy {
  getMyProfile: () => IProfileResponse
}

export interface IStrategy {
  authStrategy: IAuthStrategy
  profileStrategy: IProfileStrategy
}
