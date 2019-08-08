import { createContext } from 'react'
import { TMyInfo } from '../../types'

export type IHandleAction = (id: string) => (e: React.MouseEvent<HTMLElement>) => void

export interface IContext {
  me: TMyInfo
  action: {
    handleLike: IHandleAction
    handleOpenChat: IHandleAction
    handleInviteToChat: IHandleAction
    handleRemoveFromFriends: IHandleAction
    handleAddToMute: IHandleAction
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
    handleLike: () => () => {},
    handleOpenChat: () => () => {},
    handleInviteToChat: () => () => {},
    handleRemoveFromFriends: () => () => {},
    handleAddToMute: () => () => {},
  },
})

export const { Provider, Consumer } = Context
export default Context
