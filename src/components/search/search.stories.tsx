import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'

import SearchInput from './search'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { UserGridContainer, MyContainer } from '../../containers'
import { me } from '../../mocks'
import { InfoLayout } from '../../layout'

const Search = (props: any) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <UserGridContainer isLoading={props.loading}>
        <InfoLayout>
          <SearchInput />
        </InfoLayout>
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
  .add('Loading view', () => <Search loading={boolean('Loading', true)} />)
  .add('Mobile layout', () => <Search />, {
    viewport: { defaultViewport: 'iphonex' },
  })
