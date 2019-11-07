import * as React from 'react'
import { AuthContainer } from '../containers'
import { Auth } from '../components/auth'
import { RootContext } from '../components/common'

const AuthLayout: React.FC = () => {
  const { setToken, token } = React.useContext(RootContext)
  console.log('TCL: AuthLayout:React.FC -> token', token)
  return (
    <AuthContainer setToken={setToken}>
      <Auth />
    </AuthContainer>
  )
}

export default AuthLayout
