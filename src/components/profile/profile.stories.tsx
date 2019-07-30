import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Grid, Container } from '@material-ui/core'
// import { BrowserRouter as RouterProvider } from 'react-router-dom'

import MyProfileCmp from './my-profile'
import { ProfileWidget } from './widget'
import { Provider as ContextProvider } from '../common'
import { TMyInfo } from '../../types'

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
}

const MyProfile = (props: any) => (
  <Container component="main">
    <MyProfileCmp {...props} />
  </Container>
)

const ProfileWidgetWrap = (props: any) => (
  <ContextProvider value={{ me }}>
    <Container component="main">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <ProfileWidget {...props} />
        </Grid>
      </Grid>
    </Container>
  </ContextProvider>
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
