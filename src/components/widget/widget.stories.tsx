import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Grid, Container } from '@material-ui/core'
import StoryRouter from 'storybook-react-router'
import { grey } from '@material-ui/core/colors'

import { ProfileWidget, UserProfileWidget, InfoWidget } from './'
import { Provider as ContextProvider } from '../common'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { IUserProfile } from './user-profile-widget'
import { me, action, users } from '../../mocks'
import { UserContainer } from '../../containers'
import { IInfoWidget } from './info-widget'

const ProfileWidgetWrap = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me, action }}>
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

const UserProfileWidgetWrap = (props: IUserProfile) => (
  <ThemeProvider>
    <ContextProvider value={{ me, action }}>
      <UserContainer userId={users.deadpool.id}>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <UserProfileWidget {...props} />
            </Grid>
          </Grid>
        </Container>
      </UserContainer>
    </ContextProvider>
  </ThemeProvider>
)

const InfoWidgetWrap = (props: IInfoWidget) => (
  <ThemeProvider>
    <ContextProvider value={{ me, action }}>
      <UserContainer userId={users.deadpool.id}>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InfoWidget {...props} />
            </Grid>
          </Grid>
        </Container>
      </UserContainer>
    </ContextProvider>
  </ThemeProvider>
)
const stories = storiesOf('Widgets', module)
stories.addDecorator(StoryRouter())

stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('My profile widget', () => <ProfileWidgetWrap />)
  .add('User profile widget', () => <UserProfileWidgetWrap />)
  .add('Info widget', () => (
    <InfoWidgetWrap
      users={[users.deadpool, users.quill]}
      friendInvites={1}
      chatInvites={3}
    />
  ))
