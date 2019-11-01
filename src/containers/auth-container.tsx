import * as React from 'react'
import { useMutation } from '@apollo/react-hooks'

import { UserAuthProvider } from '../components/common'
import { IUserRequest } from '../types'
import { Login } from '../graphql/mutations/login.graphql'

interface IAuthContainer {
  children: React.ReactElement
  isLoading?: boolean
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
  const handleSubmit = (sessionInput: IUserRequest) => {
    const response = useMutation(Login, { variables: sessionInput })
    console.log('TCL: handleSubmit -> response', response)
  }
  return children({ handleSubmit, loading })
}