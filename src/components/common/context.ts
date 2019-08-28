import { createContext } from 'react'
import {
  TMyInfo,
  IUserPreview,
  TMsgOrDivider,
  IChat,
  IUserSettings,
  IUserPolicy,
  IUserProfileInfo,
} from '../../types'
const noOp = () => () => {}

export type THandleAction = (id: string) => (e: React.MouseEvent<HTMLElement>) => void
export type THandleSendMessage = (id: string, body: string) => void

export interface IContext {
  me: TMyInfo
  loading: boolean
  action: {
    handleLike: THandleAction
    handleOpenChat: THandleAction
    handleInviteToChat: THandleAction
    handleRemoveFromFriends: THandleAction
    handleAddToMute: THandleAction
    handleAcceptFriend: THandleAction
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
  loading: false,
  action: {
    handleLike: noOp,
    handleOpenChat: noOp,
    handleInviteToChat: noOp,
    handleRemoveFromFriends: noOp,
    handleAddToMute: noOp,
    handleAcceptFriend: noOp,
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
  loading: boolean
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
  loading: false,
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

export const UserProfileContext = createContext<IUserProfileInfo>({
  id: '',
  username: '',
  firstname: '',
  lastname: '',
  city: '',
  gender: null,
  birthdate: {
    month: 0,
    day: 0,
    year: 0,
  },
  isOnline: false,
  avatar: '',
  age: 0,
  registered: '',
  photos: [],
  friends: [],
  friendInvites: [],
})

interface IUserGridContext {
  users: IUserPreview[]
  loading: boolean
}

export const UserGridContext = createContext<IUserGridContext>({
  users: [],
  loading: false,
})

export const { Provider: UserGridProvider, Consumer: UserGridConsumer } = UserGridContext
// prettier-ignore
export const { Provider: UserProfileProvider, Consumer: UserProfileConsumer } = UserProfileContext
export const { Provider: InfoProvider, Consumer: InfoConsumer } = InfoContext
export const { Provider: ChatProvider, Consumer: ChatConsumer } = ChatContext
export const { Provider: UserCtxProvider, Consumer: UserCtxConsumer } = UserContext
export const { Provider, Consumer } = Context
export default Context
