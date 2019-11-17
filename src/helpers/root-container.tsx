import * as React from 'react'

import { RootProvider } from '../components/common'
import { IUserPreview } from '../types'
import config from '../config'
import { LS } from '../service'

interface IRootContainer {
  isLoading?: boolean
  children: React.ReactNode
}

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
  return (
    <RootProvider value={{ token, user, setToken, loading: isLoading || false }}>
      {children}
    </RootProvider>
  )
}
