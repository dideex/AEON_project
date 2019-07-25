import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { CustomThemeProvider as ThemeProvider } from '../../service'
import AuthCmp from './auth'

const handleSubmit = action('Handle submit')

const Auth = (props: any) => (
  <ThemeProvider>
    <AuthCmp {...props} />
  </ThemeProvider>
)

const stories = storiesOf('Auth', module)
stories.addDecorator(withKnobs)
const groupId = 'LOADING-GR1'

stories
  .add(
    'Basic view',
    () => <Auth handleSubmit={handleSubmit} isLoading={boolean('Loading', false, groupId)} />,
    {
      info: { inline: true },
    },
  )
  .add(
    'Mobile layout',
    () => <Auth handleSubmit={handleSubmit} isLoading={boolean('Loading', false, groupId)} />,
    {
      viewport: { defaultViewport: 'iphonex' },
    },
  )
