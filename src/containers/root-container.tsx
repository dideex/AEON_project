import * as React from 'react'

import { RootProvider } from '../components/common'
import { IUserPreview } from '../types'

interface IRootContainer {
  isLoading?: boolean
  children: React.ReactNode
}

export const RootContainer: React.FC<IRootContainer> = ({ children, isLoading }) => {
  const [token, setToken] = React.useState<string>('')
  const [user, setUser] = React.useState<IUserPreview>()

  const handleTokenChange = (token: string, user: IUserPreview): void => {
    setToken(token)
    setUser(user)
  }
  return (
    <RootProvider
      value={{ token, user, setToken: handleTokenChange, loading: isLoading || false }}
    >
      {children}
    </RootProvider>
  )
}
