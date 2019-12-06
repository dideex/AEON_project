import { IUserRequest, TMyInfo } from './user'

export interface IAuthStrategy {
  handleSubmit: (input: IUserRequest) => void
}

interface IProfileResponse {
  data: TMyInfo | null
  loading: boolean
}
export interface IProfileStrategy {
  getMyProfile: () => IProfileResponse
}

export interface IStrategy {
  authStrategy: IAuthStrategy
  profileStrategy: IProfileStrategy
}
