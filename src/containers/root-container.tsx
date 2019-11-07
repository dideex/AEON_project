import * as React from 'react'

import { RootProvider } from '../components/common'
import { IUserPreview } from '../types'

interface IRootContainer {
  isLoading?: boolean
  children: React.ReactNode
}

export const RootContainer: React.FC<IRootContainer> = ({ children, isLoading }) => {
  const [token, changeToken] = React.useState<string>('')
  const [user, changeUser] = React.useState<IUserPreview>()

  const setToken = (token: string, user: IUserPreview): void => {
    changeToken(token)
    changeUser(user)
  }
  return (
    <RootProvider value={{ token, user, setToken, loading: isLoading || false }}>
      {children}
    </RootProvider>
  )
}
