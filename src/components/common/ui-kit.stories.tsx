import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { BrowserRouter as RouterProvider } from 'react-router-dom'

import CustomInput, { ICustomInput, TInputType, TName } from './custom-input'
import { Grid } from '@material-ui/core'

const handleChange = action('Handle change')
const Cmp = (props: ICustomInput) => (
  <RouterProvider>
    <Grid container justify="center">
      <Grid item xs={6} sm={6}>
        <CustomInput {...props} />
      </Grid>
    </Grid>
  </RouterProvider>
)

const stories = storiesOf('Ui kit', module)

stories.addDecorator(withKnobs)

const typeOptions = {
  text: 'text',
  password: 'password',
}
const nameOptions = {
  username: 'username',
  password: 'password',
  firstname: 'firstname',
  lastname: 'lastname',
  city: 'city',
}

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Custom input', () => (
    <Cmp
      handleChange={handleChange}
      name={select('Input name', nameOptions, 'username') as TName}
      type={select('Input type', typeOptions, 'text') as TInputType}
      value={text('Value', 'email@mail.com')}
      disabled={boolean('Disabled', false)}
      required={boolean('Required', false)}
    />
  ))
