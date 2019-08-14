import * as React from 'react'
import { Grid } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { CustomThemeProvider } from '../../service'
import ChatCmp from './chat'
import CustMessageCmp from './chat-message'
import {
  chatSingleMessage,
  chatSecondMessage,
  messageFlow,
  me,
  action,
  sendMessage,
} from '../../mocks'
import { Provider as ContextProvider } from '../common'
import { ChatContainer } from '../../containers'

// const noOp = () => () => {}
const Chat = (props: any) => (
  <CustomThemeProvider>
    <ContextProvider value={{ me, action }}>
      <ChatContainer
        messages={messageFlow}
        initialOpenChatId="test-id"
        sendMessage={sendMessage}
      >
        <ChatCmp {...props} />
      </ChatContainer>
    </ContextProvider>
  </CustomThemeProvider>
)

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
  .add('Basic view', () => <Chat messages={messageFlow} />)
  .add('Mobile layout', () => <Chat messages={messageFlow} />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('Desktop message', () => (
    <CustomMessage
      message={{
        ...chatSingleMessage,
        isMine: boolean('Is mine', false),
        unread: boolean('Unread', false),
      }}
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
      />
    ),
    {
      viewport: { defaultViewport: 'iphonex' },
    },
  )
