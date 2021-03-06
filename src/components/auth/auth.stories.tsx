import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import { CustomThemeProvider as ThemeProvider } from '../../service'
import AuthCmp from './auth'
// import RegisterCmp from './register'

const handleSubmit = action('Handle submit')

const Auth = (props: any) => (
  <ThemeProvider>
    <AuthCmp {...props} />
  </ThemeProvider>
)
// const Register = (props: any) => (
//   <ThemeProvider>
//     <RegisterCmp {...props} />
//   </ThemeProvider>
// )

const stories = storiesOf('Auth flow', module)
stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .add('Auth: basic view', () => (
    <Auth handleSubmit={handleSubmit} isLoading={boolean('Loading', false)} />
  ))
  // .add(
  //   'Auth: mobile view',
  //   () => <Auth handleSubmit={handleSubmit} isLoading={boolean('Loading', false)} />,
  //   { viewport: { defaultViewport: 'iphonex' } },
  // )
  // .add('Register: basic view', () => (
  //   <Register
  //     handleSubmit={handleSubmit}
  //     isLoading={boolean('Loading', false, 'LOADING-GR3')}
  //   />
  // ))
  // .add(
  //   'Register: mobile view',
  //   () => (
  //     <Register
  //       handleSubmit={handleSubmit}
  //       isLoading={boolean('Loading', false, 'LOADING-GR3')}
  //     />
  //   ),
  //   { viewport: { defaultViewport: 'iphonex' } },
  // )
