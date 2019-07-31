import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Grid, Container } from '@material-ui/core'
// import { BrowserRouter as RouterProvider } from 'react-router-dom'

import MyProfileCmp from './my-profile'
import { ProfileWidget } from './widget'
import { Provider as ContextProvider } from '../common'
import { TMyInfo } from '../../types'
import { grey } from '@material-ui/core/colors'
import { CustomThemeProvider as ThemeProvider } from '../../service'

const me: TMyInfo = {
  username: 'Tony@stark.com',
  firstname: 'Tony',
  lastname: 'Stark',
  city: 'New-York',
  gender: 'male',
  birthDate: {
    month: 2,
    year: 1963,
    day: 22,
  },
  patronymic: 'Stark',
  avatar: '/image/avatar/me.jpg',
  about: 'Genius, Billionaire, Playboy, Philanthropist',
  age: 66,
  statistic: {
    posts: 13,
    likes: 68,
  },
}

const MyProfile = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me }}>
      <Container component="main">
        <MyProfileCmp {...props} />
      </Container>
    </ContextProvider>
  </ThemeProvider>
)

const ProfileWidgetWrap = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me }}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <ProfileWidget {...props} />
          </Grid>
        </Grid>
      </Container>
    </ContextProvider>
  </ThemeProvider>
)

const stories = storiesOf('Profile', module)

stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('MyProfile: Basic', () => <MyProfile />)
  .add('MyProfile: Mobile', () => <MyProfile />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('My profile widget', () => <ProfileWidgetWrap />)
