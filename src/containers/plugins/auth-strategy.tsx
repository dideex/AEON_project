import * as React from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Login } from '../graphql/mutations/login.graphql'
import { IUserRequest, IUserPreview } from '../../types'

interface IAuthNetwork {
  isLoading?: boolean
  children: (props: {
    handleSubmit: (data: IUserRequest) => void
    loading: boolean
  }) => JSX.Element
  setToken?: (token: string, user: IUserPreview) => void
}

export const AuthNetwork: React.FC<IAuthNetwork> = ({
  children,
  isLoading,
  setToken,
}) => {
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
