import * as React from 'react'
import { Grid } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { CustomThemeProvider } from '../../service'
import CustomInput, { IChat } from './chat'
import CustMessageCmp from './chat-message'
import { users, chatSingleMessage, chatSecondMessage } from '../../mocks'

const Chat = (props: IChat) => <CustomInput {...props} />

const stories = storiesOf('Chat', module)

stories.addDecorator(withKnobs)

const CustomMessage = (props: any) => (
  <CustomThemeProvider>
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={3} />
      <Grid item xs={12} sm={6}>
        <CustMessageCmp {...props} />
        <CustMessageCmp
          message={{ ...chatSecondMessage, isMine: props.message.isMine }}
        />
      </Grid>
      <Grid item xs={12} sm={3} />
    </Grid>
  </CustomThemeProvider>
)

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Basic view', () => <Chat />)
  .add('Mobile layout', () => <Chat />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('Desktop message', () => (
    <CustomMessage
      message={{
        ...chatSingleMessage,
        isMine: boolean('Is mine', false),
        unread: boolean('Unread', false),
      }}
      author={users.deadpool}
    />
  ))
  .add(
    'Mobile message',
    () => (
      <CustomMessage
        message={{
          ...chatSingleMessage,
          isMine: boolean('Is mine', false),
          unread: boolean('Unread', false),
        }}
        author={users.deadpool}
      />
    ),
    {
      viewport: { defaultViewport: 'iphonex' },
    },
  )
