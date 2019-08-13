import * as React from 'react'
import { IMessage, IFormattedMessage, IUserPreview } from '../../types'
import ChatMessage from './chat-message'
import { Context } from '../common'

interface IChatList {
  messages: IMessage[]
}

const ChatList: React.FC<IChatList> = ({ messages }) => {
  const { me } = React.useContext(Context)
  function formateMessages(messages: IMessage[]): IFormattedMessage[] {
    let prevAuthor: IUserPreview
    return messages
      // Add isMine field
      .map(message => ({ ...message, isMine: message.author.id === me.id }))
      // Collapse messagse by author
      .reduce((acc: IFormattedMessage[], message): IFormattedMessage[] => {
        let author: IUserPreview | undefined
        if (!prevAuthor || message.author.id !== prevAuthor.id) {
          prevAuthor = message.author
          author = prevAuthor
        }
        return [...acc, { ...message, author }]
      }, [])
  }
  return (
    <div>
      {formateMessages(messages).map(message => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  )
}

export default ChatList
