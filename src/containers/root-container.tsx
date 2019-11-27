import * as React from 'react'

import { RootProvider } from '../components/common'
import { IUserPreview } from '../types'
import config from '../config'
import { LS } from '../service'
import { authStrategyFactory } from './plugins'
import { useMutation } from '@apollo/react-hooks'
import { Login } from '*/login.graphql'

interface IRootContainer {
  isLoading?: boolean
  children: React.ReactNode
}

// type TSubmit = {
//   variables: {
//     input: IUserRequest
//   }
// }
// type TMutationRes = { data: { loginUser: IUserResponse } }
// type TSubmitMutaion = (arg: TSubmit) => TMutationRes

// type TRes = () => { data: { loginUser: IUserResponse } }

export const RootContainer: React.FC<IRootContainer> = ({ children, isLoading }) => {
  const [token, changeToken] = React.useState<string>('')
  const [user, changeUser] = React.useState<IUserPreview>()
  React.useEffect(() => {
    const token = LS.read(config.tokenKey)
    changeToken(token || '')
  }, [])

  const setToken = (token: string, user: IUserPreview): void => {
    changeToken(token)
    changeUser(user)
    LS.write(config.tokenKey, token)
  }
  const [submitMutation] = useMutation(Login)

  const strategy = {
    authStrategy: authStrategyFactory(submitMutation, setToken),
  }

  return (
    <RootProvider
      value={{ token, user, setToken, loading: isLoading || false, strategy }}
    >
      {children}
    </RootProvider>
  )
}
