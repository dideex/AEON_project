import * as React from 'react'
import { MyProfile } from '../components/profile'
import { MyContainer, UserProfileContainer } from '../containers'
import { RootContext } from '../components/common'

const MyProfileLayout: React.FC = () => {
  const { user } = React.useContext(RootContext)
  const userId = user ? user.id : ''
  return (
    <MyContainer>
      <UserProfileContainer userId={userId}>
        <MyProfile />
      </UserProfileContainer>
    </MyContainer>
  )
}

export default MyProfileLayout
