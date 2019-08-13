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
  function formateMessages(messages: IMessage[]): IFormattedMessage[] {
    let prevAuthor: IUserPreview
    return (
      messages
        // Add isMine field
        .map(message => ({ ...message, isMine: message.author.id === me.id }))
        // Collapse messagse by author
        .reduce<IFormattedMessage[]>((acc, message) => {
          let author: IUserPreview | undefined
          if (!prevAuthor || message.author.id !== prevAuthor.id) {
            prevAuthor = message.author
            author = prevAuthor
          }
          return [...acc, { ...message, type: 'message', author }]
        }, [])
    )
  }
  // FIXME: remove this logic to the container
  function addDateDividers(messages: IFormattedMessage[]): TMsgOrDivider[] {
    let curDate: string
    return messages.reduce((acc: TMsgOrDivider[], message) => {
      console.log(' LOG ___ date ', curDate, message.date)
      if (!curDate || isNewDay(curDate, message.date)) {
        console.log('isNewDay')
        curDate = message.date
        const divider: IChatDivider = {
          type: 'divider',
          date: curDate,
        }
        return [...acc, divider, message]
      } else {
        return [...acc, message]
      }
    }, [])
  }
  return (
    <div>
      {addDateDividers(formateMessages(messages)).map((entity, i) => {
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
