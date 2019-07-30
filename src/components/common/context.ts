import { createContext } from 'react'
import { TMyInfo } from '../../types'

export type IContext = { me: TMyInfo }
const Context = createContext<IContext>({
  me: {
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
  },
})

export const { Provider, Consumer } = Context
export default Context
