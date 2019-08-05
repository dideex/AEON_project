import { createContext } from 'react'
import { TMyInfo } from '../../types'

export type IHanldeLike = (id: string) => (e: React.MouseEvent<HTMLDivElement>) => void

export interface IContext {
  me: TMyInfo
  action: { handleLike: IHanldeLike }
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
    registered: '',
    isOnline: false,
    photos: [],
    friends: [],
  },
  action: {
    handleLike: () => () => {},
  },
})

export const { Provider, Consumer } = Context
export default Context
