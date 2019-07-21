import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { HeaderAppBar } from './app-bar'
import { withKnobs } from '@storybook/addon-knobs'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

const Header = () => (
  <RouterProvider>
    <HeaderAppBar />
  </RouterProvider>
)

const stories = storiesOf('Header menu', module)

stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Header />)
  .add('Loading view', () => <Header />)
  .add('Mobile layout', () => <Header />, {
    viewport: { defaultViewport: 'iphonex' },
  })
