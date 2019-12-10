import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import HeaderAppBar from './app-bar'
import { CustomThemeProvider } from '../../service'
import { MyContainer } from '../../helpers'

const Header = ({ isLoading }: any) => (
  <MyContainer isLoading={isLoading}>
    <CustomThemeProvider>
      <HeaderAppBar />
    </CustomThemeProvider>
  </MyContainer>
)

const stories = storiesOf('Header menu', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Header />)
  .add('Loading view', () => <Header isLoading={boolean('Loading', true)} />)
  .add('Mobile layout', () => <Header />, {
    viewport: { defaultViewport: 'iphonex' },
  })
