import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Container } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import StoryRouter from 'storybook-react-router'

import MyProfileCmp from './my-profile'
import SettingsCmp from './settings'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { me } from '../../mocks'
import { ProfileAndInfo } from '../../layout'
import { MyContainer } from '../../containers'

const MyProfile = (props: any) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <MyProfileCmp {...props} />
      </Container>
    </MyContainer>
  </ThemeProvider>
)

const Settings = () => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <ProfileAndInfo>
        <SettingsCmp />
      </ProfileAndInfo>
    </MyContainer>
  </ThemeProvider>
)

const stories = storiesOf('Profile', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('MyProfile: Basic', () => <MyProfile />)
  .add('MyProfile: Mobile', () => <MyProfile />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('Settings: Basic', () => <Settings />)
  .add('Settings: Mobile', () => <Settings />, {
    viewport: { defaultViewport: 'iphonex' },
  })
