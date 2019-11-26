import { IUserRequest } from './user'

export interface IAuthStrategy {
  handleSubmit: (input: IUserRequest) => void
}

export interface IStrategy {
  authStrategy: IAuthStrategy
}
