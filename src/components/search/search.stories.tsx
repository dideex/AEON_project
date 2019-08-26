import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import SearchInput, { ISearch } from './search'
import { users } from '../../mocks'
import { CustomThemeProvider as ThemeProvider } from '../../service'

const Search = (props: ISearch) => (
  <ThemeProvider>
    <SearchInput {...props} />
  </ThemeProvider>
)

const stories = storiesOf('Search', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Search users={Object.values(users)} />)
  .add('Loading view', () => <Search users={Object.values(users)} loading />)
  .add('Mobile layout', () => <Search users={Object.values(users)} />, {
    viewport: { defaultViewport: 'iphonex' },
  })
