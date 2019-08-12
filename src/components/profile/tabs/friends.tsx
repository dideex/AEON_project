import * as React from 'react'
import { Theme, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context, VerticalMenu } from '../../common'
import { IUserPreview } from '../../../types'
import { getFullName } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  content: {
    paddingLeft: theme.spacing(2),
  },
  about: {
    color: theme.color.fontSecondary,
  },
  avatar: {
    width: '8vw',
    height: '8vw',
    [theme.breakpoints.down('sm')]: {
      width: '20vw',
      height: '20vw',
    },
  },
  avatarWrap: {
    position: 'relative',
    display: 'block',
    margin: 0,
  },
  online: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: theme.color.green,
    width: '2vw',
    height: '2vw',
    borderRadius: '50%',
  },
  menu: {
    marginLeft: 'auto',
  },
}))

type IFriendCard = IUserPreview

const FriendCard: React.FC<IFriendCard> = props => {
  const classes = useStyles()
  const {
    handleOpenChat,
    handleInviteToChat,
    handleRemoveFromFriends,
    handleAddToMute,
  } = React.useContext(Context).action
  const { id, firstname, lastname, age, avatar, isOnline, about } = props
  const options = [
    { label: 'Chat', onClick: handleOpenChat(id) },
    { label: 'Invite to chat', onClick: handleInviteToChat(id) },
    { label: 'Remove', onClick: handleRemoveFromFriends(id) },
    { label: 'Mute', onClick: handleAddToMute(id) },
  ]
  return (
    <div className={classes.card}>
      <figure className={classes.avatarWrap}>
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt={getFullName(firstname, lastname)}
        />
        {isOnline && <div className={classes.online} />}
      </figure>
      <div className={classes.content}>
        <Typography variant="h5">
          {getFullName(firstname, lastname)}, {age}
        </Typography>
        <Typography className={classes.about} variant="subtitle1">
          {about}
        </Typography>
      </div>
      <VerticalMenu options={options} />
    </div>
  )
}

const FriendsPanel: React.FC = () => {
  const { friends } = React.useContext(Context).me
  return (
    <>
      {friends.map(friend => (
        <FriendCard key={friend.id} {...friend} />
      ))}
    </>
  )
}

export default FriendsPanel
