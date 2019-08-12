import * as React from 'react'
import { Paper, Avatar, Typography, Divider, makeStyles, Theme } from '@material-ui/core'

import { UserContext, AccentButton } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    textAlign: 'center',
  },
  padding: {
    padding: theme.spacing(2),
  },
  avatar: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      width: '13vw',
      height: '13vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '33vw',
      height: '33vw',
    },
  },
  divider: {
    width: '1px',
    backgroundColor: theme.palette.divider,
  },
  ttu: {
    textTransform: 'uppercase',
  },
  chatButton: {
    backgroundColor: theme.color.green,
  },
  friendButton: {
    backgroundColor: theme.color.blue,
  },
  muteButton: {
    backgroundColor: theme.color.subAccent,
  },
  buttons: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    '& > *': {
      margin: `${theme.spacing(1)}px 0`,
    },
  },
}))

export interface IUserProfile {
  showChatBtn?: boolean
  showMessageBtn?: boolean
  showMuteBtn?: boolean
}

const UserProfile: React.FC<IUserProfile> = props => {
  const { showChatBtn = true, showMessageBtn = true, showMuteBtn = true } = props
  const { user, action } = React.useContext(UserContext)
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <div className={classes.padding}>
        <Avatar className={classes.avatar} src={user.avatar} />
        <Typography variant="h5" gutterBottom className={classes.ttu}>
          {user.firstname} {user.lastname}
          {Boolean(user.age) && `, ${user.age}`}
        </Typography>
        <Typography variant="caption" color="textPrimary">
          {user.about}
        </Typography>
      </div>
      <Divider />
      <div className={classes.buttons}>
        {showChatBtn && (
          <AccentButton
            title="Say hello"
            className={classes.chatButton}
            onClick={action.handleOpenChat(user.id)}
          />
        )}
        {showMessageBtn && (
          <AccentButton
            title="Add to friend"
            className={classes.friendButton}
            onClick={action.handleRemoveFromFriends(user.id)}
          />
        )}
        {showMuteBtn && (
          <AccentButton
            title="Add to mute"
            className={classes.muteButton}
            onClick={action.handleAddToMute(user.id)}
          />
        )}
      </div>
    </Paper>
  )
}

export default UserProfile
