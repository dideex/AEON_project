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
import { chatList } from '../mocks'

// FIXME: stub function
interface IGetMessages {
  chatId: string
  children: (props: { messages: IMessage[] }) => JSX.Element
}
const GetMessages: React.FC<IGetMessages> = ({ chatId, children }) => {
  const messages = chatList[Number(chatId)]
  return children({ messages })
}

interface IChatContainer {
  children: React.ReactNode
  sendMessage: THandleSendMessage
  chats?: IChat[]
  initialOpenChatId?: string
}

export const ChatContainer: React.FC<IChatContainer> = props => {
  const { children, sendMessage, chats } = props
  const { initialOpenChatId = '' } = props
  const initialChat = findChat(initialOpenChatId, chats)
  const [activeChat, setActiveChat] = React.useState<IChat | undefined>(initialChat)
  const openChat = (id: string) => {
    setActiveChat(findChat(id, chats))
  }

  const { me } = React.useContext(Context)
  const action = { openChat, sendMessage }
  const id = activeChat ? activeChat.id : ''
  return (
    <GetMessages chatId={id}>
      {({ messages }) => (
        <ChatProvider
          value={{
            action,
            messages: messages ? formateMessages({ myId: me.id, messages }) : undefined,
            chats,
            activeChat,
          }}
        >
          {children}
        </ChatProvider>
      )}
    </GetMessages>
  )
}

interface IformateMessages {
  myId: string
  messages?: IMessage[]
}
function formateMessages(props: IformateMessages): TMsgOrDivider[] | undefined {
  const { myId, messages } = props
  let prevAuthor: IUserPreview
  let curDate: string
  if (!messages) return undefined
  return (
    messages
      // Add isMine field
      .map(message => ({ ...message, isMine: message.author.id === myId }))
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

function isNewDay(date1: string, date2: string): boolean {
  return (
    new Date(Number(date1)).toLocaleDateString() !==
    new Date(Number(date2)).toLocaleDateString()
  )
}

function findChat(id: string, chats?: IChat[]): IChat | undefined {
  return chats ? chats.find(chat => id === chat.id) : undefined
}
