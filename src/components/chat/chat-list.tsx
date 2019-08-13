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
import { Context } from '../common'

interface IChatList {
  messages: IMessage[]
}

const ChatList: React.FC<IChatList> = ({ messages }) => {
  const { me } = React.useContext(Context)
  // FIXME: remove this logic to the container
  function formateMessages(messages: IMessage[]): TMsgOrDivider[] {
    let prevAuthor: IUserPreview
    let curDate: string
    return (
      messages
        // Add isMine field
        .map(message => ({ ...message, isMine: message.author.id === me.id }))
        // Collapse messages with author
        // Add a divider between new days
        // And force add author to the first message per day
        .reduce((acc: TMsgOrDivider[], message): TMsgOrDivider[] => {
          let newMessage: IFormattedMessage = { ...message, type: 'message', author: undefined }
          if (!prevAuthor || message.author.id !== prevAuthor.id) {
            prevAuthor = message.author
            newMessage = { ...newMessage, author: prevAuthor }
          }
          if (!curDate || isNewDay(curDate, message.date)) {
            curDate = message.date
            const divider: IChatDivider = {
              type: 'divider',
              date: curDate,
            }
            return [...acc, divider, { ...newMessage, author: prevAuthor }]
          } else {
            return [...acc, newMessage]
          }
        }, [])
    )
  }
  return (
    <div>
      {formateMessages(messages).map((entity, i) => {
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

function isNewDay(date1: string, date2: string): boolean {
  return (
    new Date(Number(date1)).toLocaleDateString() !==
    new Date(Number(date2)).toLocaleDateString()
  )
}

export default ChatList
