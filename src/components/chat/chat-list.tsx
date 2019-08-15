import * as React from 'react'
import { makeStyles, Theme, Avatar, Typography, Badge } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'

import { IChat, IChatPreview, IGroupChat, IPrivatChat } from '../../types'
import { getFullName } from '../../utils'
import { chatHeight } from '../../constants'
import { ChatContext, CustomTabs, TabPanel } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  listWrap: {
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
    borderLeft: '2px solid transparent',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  activeChat: {
    borderLeftColor: theme.color.accent,
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
  const { action, activeChat } = React.useContext(ChatContext)

  // Tab stuff
  const theme = useTheme()
  function handleChangeIndex(index: number) {
    setValue(index)
  }
  const [value, setValue] = React.useState<number>(0)
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  const groupChats = chats
    .filter(chat => chat.type === 'group')
    .sort(sortByUnreadMessage) as IGroupChat[]
  const privatChats = chats
    .filter(chat => chat.type === 'private')
    .sort(sortByUnreadMessage) as IPrivatChat[]

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

  const getAvatar = ({ unreadMessages, image, name }: IChatPreview) => {
    const getAvatar = <Avatar src={image} alt={name} />
    return Boolean(unreadMessages) ? (
      <Badge
        classes={{ badge: classes.badge }}
        badgeContent={unreadMessages}
        max={9}
        color="primary"
      >
        {getAvatar}
      </Badge>
    ) : (
      getAvatar
    )
  }
  const isActiveChat = (chat: IChatPreview) => activeChat && chat.id === activeChat.id
  const renderChatListByType = (chats: IChat[]) =>
    formatChatList(chats).map(chat => (
      <div
        onClick={action.openChat(chat.id)}
        className={`${classes.container} ${
          isActiveChat(chat) ? classes.activeChat : null
        }`}
        key={chat.id}
      >
        {getAvatar(chat)}
        {getChatInfo(chat)}
      </div>
    ))
  return (
    <div>
      <CustomTabs tabs={['Group', 'Private']} value={value} handleChange={handleChange} />
      <div className={classes.listWrap}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {renderChatListByType(groupChats)}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {renderChatListByType(privatChats)}
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  )
}

function formatChatList(chats: IChat[]): IChatPreview[] {
  return chats.map(chat => {
    if (chat.type === 'group') {
      const { id, name, image, unreadMessages, type, lastMessage } = chat
      return { id, name, image, unreadMessages, type, lastMessage }
    } else {
      const { id, unreadMessages, author, lastMessage } = chat
      const name = getFullName(author.firstname, author.lastname, author.patronymic)
      const { avatar: image } = author
      return { id, name, image, unreadMessages, type: 'private', lastMessage }
    }
  })
}

function sortByUnreadMessage(b: IChat, a: IChat) {
  return a.unreadMessages - b.unreadMessages
}

export default ChatList
