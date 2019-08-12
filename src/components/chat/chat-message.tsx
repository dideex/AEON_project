import * as React from 'react'
import { Theme, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { IMessage } from '../../types'
import { IUserPreview } from '../../types'
import { getFullName, parseDate, parseTime } from '../../utils'

export interface IChatMessage {
  message: IMessage
  author?: IUserPreview
}
const useStyles = makeStyles((theme: Theme) => ({
  message: {
    display: 'flex',
    flexDirection: 'column',
  },
  myMessage: {
    alignItems: 'flex-end',
  },
  content: {
    width: '80%',
    margin: `${theme.spacing(1)}px 0`,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    color: theme.color.fontSecondary,
    backgroundColor: theme.color.background,
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  myContent: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.color.blue,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  messageDate: {
    color: theme.color.fontSecondary,
    fontSize: '1rem',
    padding: `0 ${theme.spacing(1)}px`,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}))

const ChatMessage: React.FC<IChatMessage> = ({ message, author }) => {
  const { isMine, unread, body } = message
  // const { firstname, lastname, avatar } = author
  const classes = useStyles()
  const wrapper = isMine ? `${classes.myMessage} ${classes.message}` : classes.message
  const content = isMine ? `${classes.myContent} ${classes.content}` : classes.content

  const fullName = isMine
    ? 'You'
    : getFullName(author && author.firstname, author && author.lastname)
  const MessageHeader = () =>
    author ? (
      <div className={classes.header}>
        <Avatar
          src={author.avatar}
          className={classes.avatar}
          alt={getFullName(author.firstname, author.lastname)}
        />
        <Typography variant="h6">{fullName}</Typography>
        <Typography className={classes.messageDate} variant="h6">
          {parseTime(message.date)}
        </Typography>
      </div>
    ) : null
  return (
    <div className={wrapper}>
      <MessageHeader />
      <div className={content}>
        <Typography>{body}</Typography>
      </div>
    </div>
  )
}

export default ChatMessage
