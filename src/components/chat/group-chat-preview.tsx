import * as React from 'react'
import { Theme, makeStyles, Avatar, Paper, Typography, Divider } from '@material-ui/core'

import { ChatContext } from '../common'
import { chatHeight } from '../../constants'
import { getFullName } from '../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  members: {
    padding: `${theme.spacing(2)}px 0`,
    height: chatHeight,
    overflowY: 'scroll',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    paddingLeft: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2),
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
}))

const GroupChatPreview: React.FC = () => {
  const classes = useStyles()
  const { activeChat } = React.useContext(ChatContext)
  if (!activeChat || activeChat.type === 'private') return null

  const { members } = activeChat
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Avatar src={activeChat.image} />
        <Typography className={classes.title} variant="h5">
          {activeChat.name}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="h5">Group members:</Typography>
      <div className={classes.members}>
        {members.map(user => (
          <div key={user.id} className={classes.user}>
            <Avatar src={user.avatar} />
            <Typography className={classes.title} variant="subtitle1">
              {getFullName(user.firstname, user.lastname, user.patronymic)}
            </Typography>
          </div>
        ))}
      </div>
    </Paper>
  )
}

export default GroupChatPreview
