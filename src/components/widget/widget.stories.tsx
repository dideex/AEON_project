import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Grid, Container } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

import { ProfileWidget } from './'
import { Provider as ContextProvider } from '../common'
import { CustomThemeProvider as ThemeProvider } from '../../service'
import { me } from '../../mocks'

const handleLikeClick = (id: string) => () => {
  action(`Handle click click ${id}`)
}

const ProfileWidgetWrap = (props: any) => (
  <ThemeProvider>
    <ContextProvider value={{ me, action: { handleLike: handleLikeClick } }}>
      <Container component="main" style={{ backgroundColor: grey[50] }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <ProfileWidget {...props} />
          </Grid>
        </Grid>
      </Container>
    </ContextProvider>
  </ThemeProvider>
)
const stories = storiesOf('Widgets', module)

stories.addDecorator(withKnobs)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('My profile widget', () => <ProfileWidgetWrap />)
