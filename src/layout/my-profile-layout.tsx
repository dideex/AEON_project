import * as React from 'react'
import { MyProfile } from '../components/profile'
import { MyContainer } from '../containers'

const MyProfileLayout: React.FC = () => (
  <MyContainer>
    <MyProfile />
  </MyContainer>
)

export default MyProfileLayout
