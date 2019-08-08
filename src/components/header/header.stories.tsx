import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import HeaderAppBar, { IHeaderAppBar } from './app-bar'
import { CustomThemeProvider } from '../../service'
import { Provider as ContextProvider } from '../common'
import { me, action } from '../../mocks'

const Header = (props: IHeaderAppBar) => (
  <ContextProvider value={{ me, action }}>
    <CustomThemeProvider>
      <HeaderAppBar {...props} />
    </CustomThemeProvider>
  </ContextProvider>
)

const stories = storiesOf('Header menu', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Header />)
  .add('Loading view', () => <Header isLoading />)
  .add('Mobile layout', () => <Header />, {
    viewport: { defaultViewport: 'iphonex' },
  })
