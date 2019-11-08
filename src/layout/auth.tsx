import * as React from 'react'
import { AuthContainer } from '../containers'
import { Auth } from '../components/auth'
import { RootContext } from '../components/common'

const AuthLayout: React.FC = () => {
  const { setToken } = React.useContext(RootContext)
  return (
    <AuthContainer setToken={setToken}>
      <Auth />
    </AuthContainer>
  )
}

export default AuthLayout
