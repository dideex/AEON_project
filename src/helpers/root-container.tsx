import * as React from 'react'

import { RootProvider as RootContextProvider } from '../components/common'
import { IUserPreview } from '../types'
import { me } from '../mocks'

interface IRootContainer {
  isLoading?: boolean
  children: React.ReactNode
}

export const RootContainer: React.FC<IRootContainer> = ({ children, isLoading }) => {
  const [token] = React.useState<string>('')
  const [user] = React.useState<IUserPreview>()

  const setToken = (): void => {}
  const fakeStategy = {
    authStrategy: { handleSubmit: () => {} },
    profileStrategy: { getMyProfile: () => ({ data: me, loading: false }) },
  }
  return (
    <RootContextProvider
      value={{
        token,
        user,
        setToken,
        loading: isLoading || false,
        strategy: fakeStategy,
      }}
    >
      {children}
    </RootContextProvider>
  )
}
