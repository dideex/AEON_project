import * as React from 'react'

import { UserAuthProvider, RootContext } from '../components/common'
import { IUserRequest, IUserPreview } from '../types'

interface IAuthContainer {
  children: React.ReactElement
  isLoading?: boolean
  setToken: (token: string, user: IUserPreview) => void
}

export const AuthContainer: React.FC<IAuthContainer> = ({ children, isLoading }) => (
  <AuthNetwork isLoading={isLoading}>
    {({ handleSubmit, loading }) => (
      <UserAuthProvider value={{ handleSubmit, loading }}>{children}</UserAuthProvider>
    )}
  </AuthNetwork>
)

interface IAuthNetwork {
  isLoading?: boolean
  children: (props: {
    handleSubmit: (data: IUserRequest) => void
    loading: boolean
  }) => JSX.Element
}

const AuthNetwork: React.FC<IAuthNetwork> = ({ children, isLoading }) => {
  const loading = Boolean(isLoading)
  const { handleSubmit } = React.useContext(RootContext).strategy.authStrategy

  return children({ handleSubmit, loading })
}
