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

interface ICommonMessage {
  id: string
  date: string
  unread: boolean
  body: string
}

// After formatting messages from the backend
export interface IFormattedMessage extends ICommonMessage {
  isMine: boolean
  author?: IUserPreview
}

// Inteface from the backend
export interface IMessage extends ICommonMessage {
  author: IUserPreview
}

export type IChat = IPrivatChat | IGroupChat
