import * as React from 'react'
import { AuthContainer } from '../containers'
import { Auth } from '../components/auth'

const AuthLayout: React.FC = () => {
  return (
    <AuthContainer>
      <Auth />
    </AuthContainer>
  )
}

export default AuthLayout
