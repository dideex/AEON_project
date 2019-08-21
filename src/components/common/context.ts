import { createContext } from 'react'
import {
  TMyInfo,
  IUserPreview,
  TMsgOrDivider,
  IChat,
  IUserSettings,
  IUserPolicy,
} from '../../types'
const noOp = () => () => {}

export type THandleAction = (id: string) => (e: React.MouseEvent<HTMLElement>) => void
export type THandleSendMessage = (id: string, body: string) => void

export interface IContext {
  me: TMyInfo
  action: {
    handleLike: THandleAction
    handleOpenChat: THandleAction
    handleInviteToChat: THandleAction
    handleRemoveFromFriends: THandleAction
    handleAddToMute: THandleAction
    handleUpdateProfile: (data: Required<IUserSettings>) => void
    handleUserPolicy: (data: IUserPolicy) => void
    handleUpdateAvatar: (data: File) => void
  }
}
const Context = createContext<IContext>({
  me: {
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    city: '',
    gender: null,
    birthdate: {
      month: 0,
      year: 0,
      day: 0,
    },
    patronymic: '',
    avatar: '',
    about: '',
    age: 0,
    statistic: {
      posts: 0,
      likes: 0,
    },
    socialStatistic: {
      posts: 0,
      notifications: 0,
      messages: 0,
      invites: 0,
    },
    registered: '',
    isOnline: false,
    photos: [],
    friends: [],
    ignores: [],
  },
  action: {
    handleLike: noOp,
    handleOpenChat: noOp,
    handleInviteToChat: noOp,
    handleRemoveFromFriends: noOp,
    handleAddToMute: noOp,
    handleUpdateProfile: () => {},
    handleUserPolicy: () => {},
    handleUpdateAvatar: () => {},
  },
})

export interface IUserContext {
  user: IUserPreview
  action: {
    handleOpenChat: THandleAction
    handleInviteToChat: THandleAction
    handleRemoveFromFriends: THandleAction
    handleAddToMute: THandleAction
  }
}
export const UserContext = createContext<IUserContext>({
  user: {
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    age: 0,
    city: '',
    isOnline: true,
    avatar: '',
  },
  action: {
    handleOpenChat: noOp,
    handleInviteToChat: noOp,
    handleRemoveFromFriends: noOp,
    handleAddToMute: noOp,
  },
})

export interface IChatContext {
  messages?: TMsgOrDivider[]
  chats?: IChat[]
  activeChat?: IChat
  action: {
    openChat: THandleAction
    sendMessage: THandleSendMessage
  }
}

export const ChatContext = createContext<IChatContext>({
  action: {
    openChat: noOp,
    sendMessage: noOp,
  },
})

export interface IInfoWidgetCtx {
  users: IUserPreview[]
  friendInvites: number
  chatInvites: number
}

export const InfoContext = createContext<IInfoWidgetCtx>({
  users: [],
  friendInvites: 0,
  chatInvites: 0,
})

export const { Provider: InfoProvider, Consumer: InfoConsumer } = InfoContext
export const { Provider: ChatProvider, Consumer: ChatConsumer } = ChatContext
export const { Provider: UserCtxProvider, Consumer: UserCtxConsumer } = UserContext
export const { Provider, Consumer } = Context
export default Context
