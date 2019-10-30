import * as React from 'react'
import { UserAuthProvider } from '../components/common'
import { IUserRequest } from '../types'

// TODO: test it
export const AuthContainer: React.FC = ({ children }) => {
  return (
    <AuthNetwork>
      {({ handleSubmit, loading }) => (
        <UserAuthProvider value={{ handleSubmit, loading }}>{children}</UserAuthProvider>
      )}
    </AuthNetwork>
  )
}

interface IAuthNetwork {
  isLoading?: boolean
  children: (props: {
    handleSubmit: (data: IUserRequest) => void
    loading: boolean
  }) => JSX.Element
}

const AuthNetwork: React.FC<IAuthNetwork> = ({ children, isLoading }) => {
  const loading = Boolean(isLoading)
  const handleSubmit = () => {}
  return children({ handleSubmit, loading })
}
