import { IUserPreview } from './user'

type TChatType = 'group' | 'private'
export interface IChat {
  id: string
  name: string
  type: TChatType
  unreadMessages: number
  owner: IUserPreview
  members: IUserPreview[]
}

export interface IMessageBody {
  body: string
}

export interface IMessageInfo {
  id: string
  sender: IUserPreview
  date: string
  unread: boolean
}

export type IMessage = IMessageBody & IMessageInfo
