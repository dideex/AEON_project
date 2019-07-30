import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Grid, CssBaseline, Container } from '@material-ui/core'
// import { BrowserRouter as RouterProvider } from 'react-router-dom'

import MyProfileCmp from './my-profile'
import { ProfileWidget } from './widget'

const MyProfile = (props: any) => (
  <Container component="main">
    <MyProfileCmp {...props} />
  </Container>
)

const ProfileWidgetWrap = (props: any) => (
  <Container component="main">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <ProfileWidget {...props} />
      </Grid>
    </Grid>
  </Container>
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
