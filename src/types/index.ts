export interface IUserRequest {
  username: string
  password: string
}

type IGender = 'male' | 'female'

export interface IUserBio {
  firstname: string
  lastname: string
  city: string
}
export interface IUserGender {
  gender: IGender | null
}

export interface IUserBirthDate {
  month: number
  year: number
  day: number
}

export type TUserRegister = IUserRequest & IUserBio & IUserGender & IUserBirthDate
