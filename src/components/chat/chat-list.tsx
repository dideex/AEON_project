import * as React from 'react'

import { IChat, IChatPreview } from '../../types'
import { makeStyles, Theme, Avatar, Typography, Badge } from '@material-ui/core'
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
    fontSize: '1rem',
  },
  badge: {
    color: 'white',
  },
  content: {
    marginLeft: theme.spacing(2),
    flex: '90%',
    maxWidth: '90%',
  },
  message: {
    maxWidth: '90%',
    display: 'block',
    color: theme.color.fontSecondary,
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  messageAuthor: {
    paddingTop: 2,
    lineHeight: 1.1,
    fontWeight: 700,
  },
}))
interface IChatList {
  chats: IChat[]
}

const ChatList: React.FC<IChatList> = ({ chats }) => {
  const classes = useStyles()
  const { action } = React.useContext(ChatContext)
  const getAvatar = (image: string, name: string) => <Avatar src={image} alt={name} />

  const getChatInfo = ({ name, type, lastMessage }: IChatPreview) => (
    <div className={classes.content}>
      <Typography variant="h5" className={classes.chatTitle}>
        {name}
      </Typography>
      {type === 'group' ? (
        <>
          <Typography
            className={`${classes.message} ${classes.messageAuthor}`}
            variant="subtitle1"
          >
            {getFullName(
              lastMessage.author.firstname,
              lastMessage.author.lastname,
              lastMessage.author.patronymic,
            )}
            :{' '}
          </Typography>
          <Typography variant="subtitle2" className={classes.message}>
            {lastMessage.body}
          </Typography>
        </>
      ) : (
        <Typography variant="subtitle1" className={classes.message}>
          {lastMessage.body}
        </Typography>
      )}
    </div>
  )
  return (
    <div className={classes.wrap}>
      {formatChatList(chats).map(chat => (
        <div
          onClick={action.openChat(chat.id)}
          className={classes.container}
          key={chat.id}
        >
          {Boolean(chat.unreadMessages) ? (
            <Badge
              classes={{ badge: classes.badge }}
              badgeContent={chat.unreadMessages}
              max={9}
              color="primary"
            >
              {getAvatar(chat.image, chat.name)}
            </Badge>
          ) : (
            getAvatar(chat.image, chat.name)
          )}
          {getChatInfo(chat)}
        </div>
      ))}
    </div>
  )
}

function formatChatList(chats: IChat[]): IChatPreview[] {
  return chats.map(chat => {
    if (chat.type === 'group') {
      const { id, name, image, unreadMessages, type, lastMessage } = chat
      return { id, name, image, unreadMessages, type, lastMessage }
    } else {
      const { id, unreadMessages, type, author, lastMessage } = chat
      const name = getFullName(author.firstname, author.lastname, author.patronymic)
      const { avatar: image } = author
      return { id, name, image, unreadMessages, type, lastMessage }
    }
  })
}

export default ChatList
