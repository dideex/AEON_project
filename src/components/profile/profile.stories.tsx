import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Container } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import StoryRouter from 'storybook-react-router'

import MyProfileCmp from './my-profile'
import UserProfileCmp from './user-profile'
import SettingsCmp from './settings'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { me, users } from '../../mocks'
import { ProfileAndInfo } from '../../layout'
import { MyContainer, UserContainer, UserProfileContainer } from '../../helpers'

const MyProfile = (props: any) => (
  <ThemeProvider>
    <MyContainer>
      <UserProfileContainer userId={me.id}>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <MyProfileCmp {...props} />
        </Container>
      </UserProfileContainer>
    </MyContainer>
  </ThemeProvider>
)

const UserProfile = (props: any) => {
  const userId = users.deadpool.id
  return (
    <ThemeProvider>
      <MyContainer>
        <UserProfileContainer userId={userId}>
          <UserContainer userId={userId}>
            <Container component="main" style={{ backgroundColor: grey[50] }}>
              <UserProfileCmp {...props} />
            </Container>
          </UserContainer>
        </UserProfileContainer>
      </MyContainer>
    </ThemeProvider>
  )
}

// const Settings = () => (
//   <ThemeProvider>
//     <MyContainer>
//       <ProfileAndInfo>
//         <SettingsCmp />
//       </ProfileAndInfo>
//     </MyContainer>
//   </ThemeProvider>
// )

const stories = storiesOf('Profile', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('MyProfile: Basic', () => <MyProfile />)
  .add('MyProfile: Mobile', () => <MyProfile />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('User Profile: Basic', () => <UserProfile />)
  .add('User Profile: Mobile', () => <UserProfile />, {
    viewport: { defaultViewport: 'iphonex' },
  })
// .add('Settings: Basic', () => <Settings />)
// .add('Settings: Mobile', () => <Settings />, {
//   viewport: { defaultViewport: 'iphonex' },
// })
