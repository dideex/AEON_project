import * as React from 'react'
import {
  IMessage,
  IFormattedMessage,
  IUserPreview,
  IChatDivider,
  TMsgOrDivider,
} from '../../types'
import ChatMessage from './chat-message'
import ChatDivider from './chat-divider'
import { Context, ChatContext } from '../common'

interface IChatList {}

const ChatList: React.FC<IChatList> = () => {
  const { messages } = React.useContext(ChatContext)
  if (!messages) return <p>No messages yet</p>
  return (
    <div>
      {messages.map((entity, i) => {
        switch (entity.type) {
          case 'message':
            return <ChatMessage key={entity.id} message={entity} />
          case 'divider':
            return <ChatDivider key={i} {...entity} />
          default:
            return null
        }
      })}
    </div>
  )
}

export default ChatList
