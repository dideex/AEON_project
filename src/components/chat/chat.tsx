import * as React from 'react'
import { Grid } from '@material-ui/core'

import MessageList from './chat-list'
import { IMessage } from '../../types'
import { Context } from '../common'

export interface IChat {
  messages: IMessage[]
}

const Chat: React.FC<IChat> = ({ messages }) => {
  const ctx = React.useContext(Context)
  console.log("TCL: ctx", ctx)
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={3} />
      <Grid item xs={12} sm={6}>
        <MessageList messages={messages} />
      </Grid>
      <Grid item xs={12} sm={3} />
    </Grid>
  )
}

export default Chat
