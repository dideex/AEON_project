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
  birthdate: IParsedDate
}

export interface IUserInfo {
  isOnline: boolean
  patronymic?: string
  avatar: string
  about?: string
  age: number
}

export interface IUserSettingsInfo {
  about: string
  patronymic: string
}
export interface IMyStats {
  likes: number
  posts: number
}

export interface ISocialStats {
  notifications: number
  invites: number
  messages: number
  posts: number
}
export interface IUserStatistic {
  statistic: IMyStats
  socialStatistic: ISocialStats
}

export interface IUserRegistered {
  registered: string
}

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

export interface IFriendInvites {
  friendInvites?: IUserPreview[]
}

export interface IIgnores {
  ignores: IUserPreview[]
}

export interface IAvatarProps {
  title: string
  upload: string
}

type TPolicy = 'public' | 'private'
export interface IUserPolicy {
  profile: TPolicy
  message: TPolicy
  notifyFriendRequest: boolean
  notifyPhotoRating: boolean
  notifyNewPosts: boolean
}

export interface IUserResponse {
  token: string
  user: IUserPreview
}

export type IUserPreview = IUsername & IUserBio & IUserInfo
export type TUserRegister = IUserRequest & IUserBio & IUserGender & IUserBirthDate
export type TMyInfo = IUsername &
  IUserBio &
  IUserGender &
  IUserInfo &
  IUserBirthDate &
  IUserStatistic &
  IUserRegistered &
  IPhotos &
  IFriends &
  IFriendInvites &
  IIgnores & { policy?: IUserPolicy }
export type IUserProfileInfo = IUserPreview &
  IUserGender &
  IUserBirthDate &
  IPhotos &
  IFriends &
  IUserRegistered &
  IFriendInvites
export type IUserSettings = IUserBio & IUserSettingsInfo
