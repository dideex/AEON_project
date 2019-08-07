export interface IUserRequest {
  username: string
  password: string
}

export interface IUsername {
  id: string
  username: string
}

type IGender = 'male' | 'female'

export interface IUserBio {
  firstname: string
  lastname: string
  city?: string
}
export interface IUserGender {
  gender: IGender | null
}

export interface IParsedDate {
  month: number
  year: number
  day: number
}

export interface IUserBirthDate {
  birthDate: IParsedDate
}

export interface IUserInfo {
  isOnline: boolean
  patronymic?: string
  avatar: string
  about?: string
  age: number
}

export interface IUserStatistic {
  statistic: {
    likes: number
    posts: number
  }
  registered: string
}

export type IUserPreview = IUsername & IUserBio & IUserInfo

export interface IPhoto {
  id: string
  title: string
  url: string
  date: string
  likes?: IUserPreview[]
}

export interface IPhotos {
  photos: IPhoto[]
}

export interface IFriends {
  friends: IUserPreview[]
}

export type TUserRegister = IUserRequest & IUserBio & IUserGender & IUserBirthDate
export type TMyInfo = IUsername &
  IUserBio &
  IUserGender &
  IUserInfo &
  IUserBirthDate &
  IUserStatistic &
  IPhotos &
  IFriends
