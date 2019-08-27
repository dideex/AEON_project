import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import SearchInput from './search'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { UserGridContainer, MyContainer } from '../../containers'
import { me } from '../../mocks'

const Search = () => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <UserGridContainer>
        <SearchInput />
      </UserGridContainer>
    </MyContainer>
  </ThemeProvider>
)

const stories = storiesOf('Search', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Search />)
  .add('Loading view', () => <Search />)
  .add('Mobile layout', () => <Search />, {
    viewport: { defaultViewport: 'iphonex' },
  })
