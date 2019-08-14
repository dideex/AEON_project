import * as React from 'react'
import { Grid } from '@material-ui/core'

import MessageList from './chat-list'

export interface IChat {}

const Chat: React.FC<IChat> = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={3} />
      <Grid item xs={12} sm={6}>
        <MessageList />
      </Grid>
      <Grid item xs={12} sm={3} />
    </Grid>
  )
}

export default Chat
