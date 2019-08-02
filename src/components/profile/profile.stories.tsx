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
import { users } from '../../mocks'

const me: TMyInfo = {
  id: 'x000001',
  username: 'Tony@stark.com',
  firstname: 'Tony',
  lastname: 'Stark',
  city: 'New-York',
  gender: 'male',
  patronymic: 'Stark',
  avatar: '/image/avatar/me.jpg',
  about: 'Genius, Billionaire, Playboy, Philanthropist',
  age: 66,
  registered: '1547395200000',
  isOnline: true,
  birthDate: {
    month: 2,
    year: 1963,
    day: 22,
  },
  statistic: {
    posts: 13,
    likes: 68,
  },
  photos: [
    {
      id: '0000',
      title: 'Big insect in the city, call the police',
      date: '1564713854069',
      url: '/image/gallery/me_0.jpg',
      likes: [users.batman],
    },
    {
      id: '0001',
      title: 'Istambul <3',
      date: '1564213954069',
      url: '/image/gallery/me_1.jpg',
      likes: [],
    },
    {
      id: '0002',
      title: 'Hi-tech undewear',
      date: '1564713954069',
      url: '/image/gallery/me_2.jpg',
      likes: [],
    },
    {
      id: '0003',
      title: 'Ironman plays with ironman',
      date: '1564713959069',
      url: '/image/gallery/me_3.jpg',
      likes: [],
    },
    {
      id: '0004',
      title: 'Look at my red glasses',
      date: '1564713954069',
      url: '/image/gallery/me_4.jpg',
      likes: [],
    },
    {
      id: '0005',
      title: 'Peace (=',
      date: '1564213954069',
      url: '/image/gallery/me_5.jpg',
      likes: [],
    },
    {
      id: '0006',
      title: 'Sup?',
      date: '1551113954069',
      url: '/image/gallery/me_6.jpg',
      likes: [],
    },
  ],
}

const MyProfile = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me }}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
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
