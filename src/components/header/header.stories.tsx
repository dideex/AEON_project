import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

import HeaderAppBar from './app-bar'
import { CustomThemeProvider } from '../../service'
import { Provider as ContextProvider } from '../common'
import { me, action } from '../../mocks'

const Header = () => (
  <ContextProvider value={{ me, action }}>
    <CustomThemeProvider>
      <RouterProvider>
        <HeaderAppBar />
      </RouterProvider>
    </CustomThemeProvider>
  </ContextProvider>
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
