import { IUserPreview } from './user'

export interface IPost {
  id: string
  title: string
  body: string
  photo?: string
  views: number
  author: IUserPreview
  likes?: IUserPreview[]
  date: string
}
