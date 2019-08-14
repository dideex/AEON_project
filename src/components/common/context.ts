import { createContext } from 'react'
import { TMyInfo, IUserPreview, TMsgOrDivider, IChat } from '../../types'
const noOp = () => () => {}

export type THandleAction = (id: string) => (e: React.MouseEvent<HTMLElement>) => void
export type THandleSendMessage = (
  id: string,
  body: string,
) => (e: React.MouseEvent<HTMLElement>) => void

export interface IContext {
  me: TMyInfo
  action: {
    handleLike: THandleAction
    handleOpenChat: THandleAction
    handleInviteToChat: THandleAction
    handleRemoveFromFriends: THandleAction
    handleAddToMute: THandleAction
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
    birthDate: {
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
  },
  action: {
    handleLike: noOp,
    handleOpenChat: noOp,
    handleInviteToChat: noOp,
    handleRemoveFromFriends: noOp,
    handleAddToMute: noOp,
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
  openChatId?: string
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

export const { Provider: ChatProvider, Consumer: ChatConsumer } = ChatContext
export const { Provider: UserCtxProvider, Consumer: UserCtxConsumer } = UserContext
export const { Provider, Consumer } = Context
export default Context
