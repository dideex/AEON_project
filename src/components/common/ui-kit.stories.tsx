import * as React from 'react'
import { Grid } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import { CustomThemeProvider as ThemeProvider } from '../../service'
import CustomInputCmp, { ICustomInput, TInputType, TName } from './custom-input'
import VerticalMenuCmp, { IVerticalMenu } from './vertical-menu'

const handleChange = action('Handle change')
const CustomInput = (props: ICustomInput) => (
  <ThemeProvider>
    <Grid container justify="center">
      <Grid item xs={6} sm={6}>
        <CustomInputCmp {...props} />
      </Grid>
    </Grid>
  </ThemeProvider>
)

const VerticalMenu = (props: IVerticalMenu) => (
  <Grid container justify="center">
    <Grid item xs={6} sm={6}>
      <VerticalMenuCmp {...props} />
    </Grid>
  </Grid>
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

const options: {
  label: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}[] = [
  { label: 'Option 1', onClick: action('Handle option 1 click') },
  { label: 'Option 2', onClick: action('Handle option 2 click') },
  { label: 'Option 3', onClick: action('Handle option 3 click') },
  { label: 'Option 4', onClick: action('Handle option 4 click') },
]

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Custom input', () => (
    <CustomInput
      handleChange={handleChange}
      name={select('Input name', nameOptions, 'username') as TName}
      type={select('Input type', typeOptions, 'text') as TInputType}
      value={text('Value', 'email@mail.com')}
      errorMessage={text('Error message', 'Enter correct email')}
      showError={boolean('Show error', true)}
      disabled={boolean('Loading', false)}
      required={boolean('Required', true)}
    />
  ))
  .add('Vertical menu', () => <VerticalMenu options={options} />)
