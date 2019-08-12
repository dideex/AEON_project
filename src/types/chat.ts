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

export interface IMessage {
  id: string
  date: string
  unread: boolean
  isMine: boolean
  body: string
}

export type IChat = IPrivatChat | IGroupChat
