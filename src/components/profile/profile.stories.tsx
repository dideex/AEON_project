import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Container } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import StoryRouter from 'storybook-react-router'

import MyProfileCmp from './my-profile'
import { Provider as ContextProvider } from '../common'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { me, action } from '../../mocks'

const MyProfile = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me, action }}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <MyProfileCmp {...props} />
      </Container>
    </ContextProvider>
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
