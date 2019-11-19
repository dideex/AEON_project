import * as React from 'react'
import { AuthContainer } from '../containers'
import { AuthLayout } from '../layout'
import { RootContext } from '../components/common'

const AuthRoute: React.FC = () => {
  const { setToken } = React.useContext(RootContext)
  return (
    <AuthContainer setToken={setToken}>
      <AuthLayout />
    </AuthContainer>
  )
}

export default AuthRoute
