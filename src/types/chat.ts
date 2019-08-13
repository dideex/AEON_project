import { IUserPreview } from './user'

type TChatType = 'group' | 'private'

export interface ICommonChat {
  id: string
  unreadMessages: number
  type: TChatType
  messages: IMessage[]
}

export interface IPrivatChat extends ICommonChat {
  type: 'private'
  user: IUserPreview
}

export interface IGroupChat extends ICommonChat {
  type: 'group'
  name: string
  owner: IUserPreview
  members: IUserPreview[]
}

export interface IFormattedMessage {
  id: string
  date: string
  unread: boolean
  isMine: boolean
  body: string
  author?: IUserPreview
}

export interface IMessage extends IFormattedMessage {
  author: IUserPreview
}

export type IChat = IPrivatChat | IGroupChat
