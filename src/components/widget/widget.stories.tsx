import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Grid, Container } from '@material-ui/core'
import StoryRouter from 'storybook-react-router'
import { grey } from '@material-ui/core/colors'

import { ProfileWidget, UserProfileWidget, InfoWidget } from './'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { me, users } from '../../mocks'
import { UserContainer, InfoWidgetContainer, MyContainer } from '../../containers'

const ProfileWidgetWrap = ({ isLoading }: any) => (
  <ThemeProvider>
    <MyContainer id={me.id} isLoading={isLoading}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <ProfileWidget />
          </Grid>
        </Grid>
      </Container>
    </MyContainer>
  </ThemeProvider>
)

const UserProfileWidgetWrap = ({ isLoading }: any) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <UserContainer userId={users.deadpool.id} isLoading={isLoading}>
        <Container component="main" style={{ backgroundColor: grey[50] }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <UserProfileWidget />
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
  .add('My profile loading', () => <ProfileWidgetWrap isLoading />)
  .add('User profile widget', () => <UserProfileWidgetWrap />)
  .add('User profile loading', () => (
    <UserProfileWidgetWrap isLoading={boolean('Loading', true)} />
  ))
  .add('Info widget', () => <InfoWidgetWrap />)
