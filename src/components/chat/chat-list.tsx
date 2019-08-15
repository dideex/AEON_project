import * as React from 'react'

import { IChat, IChatPreview } from '../../types'
import { makeStyles, Theme, Avatar, Typography } from '@material-ui/core'
import { getFullName } from '../../utils'
import { chatHeight } from '../../constants'
import { ChatContext } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    backgroundColor: theme.color.background,
    padding: `${theme.spacing(2)}px 0`,
    height: chatHeight,
    overflowY: 'scroll',
  },
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:last-child': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  chatTitle: {
    marginLeft: theme.spacing(2),
    fontSize: '1rem',
  },
  unread: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '3vh',
    height: '3vh',
    lineHeight: '3vh',
    fontSize: '2vh',
    right: theme.spacing(2),
    backgroundColor: theme.color.accent,
    borderRadius: '50%',
    margin: 'auto 0',
    textAlign: 'center',
    color: 'white',
  },
}))
interface IChatList {
  chats: IChat[]
}

const ChatList: React.FC<IChatList> = ({ chats }) => {
  const classes = useStyles()
  const { action } = React.useContext(ChatContext)
  return (
    <div className={classes.wrap}>
      {formatChatList(chats).map(chat => (
        <div
          onClick={action.openChat(chat.id)}
          className={classes.container}
          key={chat.id}
        >
          <Avatar src={chat.image} alt={chat.name} />
          <Typography variant="h5" className={classes.chatTitle}>
            {chat.name}
          </Typography>
          {Boolean(chat.unreadMessages) && (
            <div className={classes.unread}>{chat.unreadMessages}</div>
          )}
        </div>
      ))}
    </div>
  )
}

function formatChatList(chats: IChat[]): IChatPreview[] {
  return chats.map(chat => {
    if (chat.type === 'group') {
      const { id, name, image, unreadMessages, type } = chat
      return { id, name, image, unreadMessages, type }
    } else {
      const { id, unreadMessages, type, author } = chat
      const name = getFullName(author.firstname, author.lastname, author.patronymic)
      const { avatar: image } = author
      return { id, name, image, unreadMessages, type }
    }
  })
}

export default ChatList
