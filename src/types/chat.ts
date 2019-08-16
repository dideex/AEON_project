import { IUserPreview } from './user'

export type TChatType = 'group' | 'private'

export interface ICommonChat {
  id: string
  unreadMessages: number
  type: TChatType
  lastMessage: IMessage
}

export interface IChatPreview extends ICommonChat {
  name: string
  image: string
}

export interface IPrivatChat extends ICommonChat {
  type: 'private'
  author: IUserPreview
}

export interface IGroupChat extends ICommonChat {
  type: 'group'
  name: string
  image: string
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
  type: 'message'
  author?: IUserPreview
}

// Inteface from the backend
export interface IMessage extends ICommonMessage {
  author: IUserPreview
}

export interface IChatDivider {
  type: 'divider'
  date: string
}

export type IChat = IPrivatChat | IGroupChat
export type TMsgOrDivider = IChatDivider | IFormattedMessage
