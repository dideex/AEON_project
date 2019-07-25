import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { CustomThemeProvider as ThemeProvider } from '../../service'
import AuthCmp from './auth'

const handleSubmit = action('Handle submit')

const Auth = props => (
  <ThemeProvider>
    <AuthCmp handleSubmit={handleSubmit} {...props} />
  </ThemeProvider>
)

storiesOf('Auth', module)
  .add('Basic view', () => <Auth />, { info: { inline: true } })
  .add('Mobile layout', () => <Auth />, {
    viewport: { defaultViewport: 'iphonex' },
  })
