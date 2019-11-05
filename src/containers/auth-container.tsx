import * as React from 'react'
import { useMutation } from '@apollo/react-hooks'

import { UserAuthProvider } from '../components/common'
import { IUserRequest, IUserPreview } from '../types'
import { Login } from '../graphql/mutations/login.graphql'

interface IAuthContainer {
  children: React.ReactElement
  isLoading?: boolean
  setToken?: (token: string, user: IUserPreview) => void
}

export const AuthContainer: React.FC<IAuthContainer> = ({
  children,
  isLoading,
  setToken,
}) => (
  <AuthNetwork isLoading={isLoading} setToken={setToken}>
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
  setToken?: (token: string, user: IUserPreview) => void
}

const AuthNetwork: React.FC<IAuthNetwork> = ({ children, isLoading, setToken }) => {
  const loading = Boolean(isLoading)
  const [submitMutation] = useMutation(Login)

  async function handleSubmit(input: IUserRequest) {
    const { user, token } = (await submitMutation({
      variables: { input },
    })).data.loginUser

    setToken && setToken(token, user)
  }

  return children({ handleSubmit, loading })
}
