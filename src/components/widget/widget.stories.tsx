import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Grid, Container } from '@material-ui/core'
import StoryRouter from 'storybook-react-router'
import { grey } from '@material-ui/core/colors'

import { ProfileWidget, UserProfileWidget, InfoWidget } from './'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { IUserProfile } from './user-profile-widget'
import { me, users } from '../../mocks'
import { UserContainer, InfoWidgetContainer, MyContainer } from '../../containers'

const ProfileWidgetWrap = (props: any) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <ProfileWidget {...props} />
          </Grid>
        </Grid>
      </Container>
    </MyContainer>
  </ThemeProvider>
)

const UserProfileWidgetWrap = (props: IUserProfile) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <UserContainer userId={users.deadpool.id}>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <UserProfileWidget {...props} />
            </Grid>
          </Grid>
        </Container>
      </UserContainer>
    </MyContainer>
  </ThemeProvider>
)

const InfoWidgetWrap = () => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <InfoWidgetContainer>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InfoWidget />
            </Grid>
          </Grid>
        </Container>
      </InfoWidgetContainer>
    </MyContainer>
  </ThemeProvider>
)
const stories = storiesOf('Widgets', module)
stories.addDecorator(StoryRouter())

stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('My profile widget', () => <ProfileWidgetWrap />)
  .add('User profile widget', () => <UserProfileWidgetWrap />)
  .add('Info widget', () => <InfoWidgetWrap />)
