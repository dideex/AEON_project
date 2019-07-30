export interface IUserRequest {
  username: string
  password: string
}

export interface IUsername {
  username: string
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
  birthDate: {
    month: number
    year: number
    day: number
  }
}

export interface IUserInfo {
  patronymic: string
  avatar: string
  about: string
  age: number
}

export type TUserRegister = IUserRequest & IUserBio & IUserGender & IUserBirthDate
export type TMyInfo = IUsername & IUserBio & IUserGender & IUserInfo & IUserBirthDate
