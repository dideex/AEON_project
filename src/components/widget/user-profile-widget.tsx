import * as React from 'react'
import { Paper, Avatar, Typography, Divider, makeStyles, Theme } from '@material-ui/core'

import { UserContext, AccentButton, Context, Loading } from '../common'
import { getSkeletonUserInfo } from '../../utils'

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
    padding: theme.spacing(1, 2),
    '& > *': {
      margin: theme.spacing(1, 0),
    },
  },
  about: {
    color: theme.color.fontSecondary,
  },
}))

export interface IUserProfile {
  showChatBtn?: boolean
  showMessageBtn?: boolean
  showMuteBtn?: boolean
}

const UserProfile: React.FC<IUserProfile> = props => {
  const { showChatBtn = true, showMessageBtn = true, showMuteBtn = true } = props
  const { user, action, loading } = React.useContext(UserContext)
  const { me } = React.useContext(Context)
  const isFriend = Boolean(me.friends.find(({ id }) => user && id === user.id))
  const classes = useStyles()
  const getUserInfo = () => (
    <>
      <Typography variant="h5" gutterBottom className={classes.ttu}>
        {user.firstname} {user.lastname}
        {Boolean(user.age) && `, ${user.age}`}
      </Typography>
      <Typography className={classes.about} variant="caption">
        {user.about}
      </Typography>
    </>
  )

  return (
    <Paper className={classes.paper}>
      <div className={classes.padding}>
        {loading ? (
          <Avatar className={classes.avatar}>
            <Loading size="large" type="block" />
          </Avatar>
        ) : (
          <Avatar className={classes.avatar} src={user.avatar} />
        )}

        {loading ? getSkeletonUserInfo() : getUserInfo()}
      </div>
      <Divider />
      <div className={classes.buttons}>
        {showChatBtn && (
          <AccentButton
            title="Say hello"
            className={classes.chatButton}
            onClick={action.handleOpenChat(user.id)}
            isLoading={loading}
          />
        )}
        {showMessageBtn && (
          <AccentButton
            title={isFriend ? 'Remove friend' : 'Add to friend'}
            className={classes.friendButton}
            onClick={action.handleRemoveFromFriends(user.id)}
            isLoading={loading}
          />
        )}
        {showMuteBtn && (
          <AccentButton
            title="Add to mute"
            className={classes.muteButton}
            onClick={action.handleAddToMute(user.id)}
            isLoading={loading}
          />
        )}
      </div>
    </Paper>
  )
}

export default UserProfile
