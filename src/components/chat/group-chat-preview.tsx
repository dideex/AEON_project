import * as React from 'react'
import { Theme, makeStyles, Avatar, Paper, Typography, Divider } from '@material-ui/core'
import { Star } from '@material-ui/icons'

import { ChatContext, Context, VerticalMenu } from '../common'
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
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  owner: {
    color: theme.color.accent,
    paddingLeft: theme.spacing(2),
  },
}))

const GroupChatPreview: React.FC = () => {
  const classes = useStyles()
  const { activeChat } = React.useContext(ChatContext)
  const { me } = React.useContext(Context)
  if (!activeChat || activeChat.type === 'private') return null
  const isUserOwner = (id: string) => id === activeChat.owner.id
  const isYouOwner = me.id === activeChat.owner.id
  const userActions = [
    { label: 'Remove from group', onClick: () => {} },
    { label: 'Add to mute', onClick: () => {} },
    { label: 'Make owner', onClick: () => {} },
  ]

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
      <Typography variant="h6">Group members:</Typography>
      <div className={classes.members}>
        {members.map(user => (
          <div key={user.id} className={classes.user}>
            <Avatar src={user.avatar} />
            <Typography className={classes.title} variant="subtitle1">
              {getFullName(user.firstname, user.lastname, user.patronymic)}
            </Typography>
            {isUserOwner(user.id) ? <Star className={classes.owner} /> : null}
            {isYouOwner && user.id !== me.id ? (
              <VerticalMenu options={userActions} />
            ) : null}
          </div>
        ))}
      </div>
    </Paper>
  )
}

export default GroupChatPreview
