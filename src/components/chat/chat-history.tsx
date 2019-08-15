import * as React from 'react'
import ChatMessage from './chat-message'
import ChatDivider from './chat-divider'
import { ChatContext } from '../common'
import { makeStyles } from '@material-ui/styles'
import { chatHeight } from '../../constants'

const useStyles = makeStyles(() => ({
  messages: {
    height: chatHeight,
    paddingRight: 15,
    overflowY: 'scroll',
  },
}))

const ChatHistory: React.FC = () => {
  const chatHistory = React.useRef<HTMLDivElement | null>(null)
  const scrollToBottom = (): void => {
    const { current: target } = chatHistory
    if (!target) return
    const scrollHeight: number = Math.max(target.scrollHeight, target.clientHeight)
    target.scrollTop = scrollHeight - target.clientHeight
  }
  React.useEffect(() => {
    scrollToBottom()
  }, [])

  const { messages } = React.useContext(ChatContext)
  const classes = useStyles()
  if (!messages) return <p>No messages yet</p>
  return (
    <div className={classes.messages} ref={chatHistory}>
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

export default ChatHistory