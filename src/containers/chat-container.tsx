import * as React from 'react'
import { Context, ChatProvider } from '../components/common'
import { THandleSendMessage } from '../components/common/context'
import {
  TMsgOrDivider,
  IChat,
  IChatDivider,
  IFormattedMessage,
  IUserPreview,
  IMessage,
} from '../types'

interface IChatContainer {
  children: React.ReactNode
  sendMessage: THandleSendMessage
  messages?: IMessage[]
  chats?: IChat[]
  initialOpenChatId?: string
}

export const ChatContainer: React.FC<IChatContainer> = props => {
  const { children, sendMessage, messages, chats } = props
  const { initialOpenChatId = '' } = props
  const initialChat = findChat(initialOpenChatId, chats)
  const [activeChat, setActiveChat] = React.useState<IChat | undefined>(initialChat)
  const openChat = (id: string) => {
    setActiveChat(findChat(id, chats))
  }

  const { me } = React.useContext(Context)
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
          let newMessage: IFormattedMessage = {
            ...message,
            type: 'message',
            author: undefined,
          }
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

  const formattedMessages = messages ? formateMessages(messages) : undefined
  const formattedChats = chats ? chats : undefined
  const action = { openChat, sendMessage }
  return (
    <ChatProvider
      value={{ action, messages: formattedMessages, chats: formattedChats, activeChat }}
    >
      {children}
    </ChatProvider>
  )
}

function isNewDay(date1: string, date2: string): boolean {
  return (
    new Date(Number(date1)).toLocaleDateString() !==
    new Date(Number(date2)).toLocaleDateString()
  )
}

function findChat(id: string, chats?: IChat[]): IChat | undefined {
  return chats ? chats.find(chat => id === chat.id) : undefined
}
