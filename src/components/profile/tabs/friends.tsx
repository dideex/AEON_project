import * as React from 'react'
import { Theme, Avatar, Typography, ButtonGroup, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context, VerticalMenu, UserProfileContext } from '../../common'
import { IUserPreview } from '../../../types'
import { getFullName } from '../../../utils'
import { Done, Close } from '@material-ui/icons'

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
  control: {
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
  const { id: myId, ignores } = React.useContext(Context).me
  const { id, firstname, lastname, age, avatar, isOnline, about } = props
  const muteLabel = Boolean(ignores.find(user => user.id === id)) ? 'Unmute' : 'Munte'
  const options = [
    { label: 'Chat', onClick: handleOpenChat(id) },
    { label: 'Invite to chat', onClick: handleInviteToChat(id) },
    { label: 'Remove', onClick: handleRemoveFromFriends(id) },
    { label: muteLabel, onClick: handleAddToMute(id) },
  ]
  const fullName = myId === id ? 'You' : getFullName(firstname, lastname)
  return (
    <div className={classes.card}>
      <figure className={classes.avatarWrap}>
        <Avatar className={classes.avatar} src={avatar} alt={fullName} />
        {isOnline && <div className={classes.online} />}
      </figure>
      <div className={classes.content}>
        <Typography variant="h5">
          {fullName}, {age}
        </Typography>
        <Typography className={classes.about} variant="subtitle1">
          {about}
        </Typography>
      </div>
      <VerticalMenu options={options} />
    </div>
  )
}

interface IFriendInvite {
  user: IUserPreview
  handleAcceptFriend: (e: React.MouseEvent<HTMLButtonElement>) => void
  handleRemoveFromFriends: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FriendInvite: React.FC<IFriendInvite> = ({ user, ...actions }) => {
  const classes = useStyles()

  const { firstname, lastname, age, avatar, isOnline, about } = user
  const { handleAcceptFriend, handleRemoveFromFriends } = actions
  const fullName = getFullName(firstname, lastname)
  return (
    <div className={classes.card}>
      <figure className={classes.avatarWrap}>
        <Avatar className={classes.avatar} src={avatar} alt={fullName} />
        {isOnline && <div className={classes.online} />}
      </figure>
      <div className={classes.content}>
        <Typography variant="h5">
          {fullName}, {age}
        </Typography>
        <Typography className={classes.about} variant="subtitle1">
          {about}
        </Typography>
      </div>
      <div className={classes.control}>
        <ButtonGroup color="primary" aria-label="Request friends">
          <Button onClick={handleAcceptFriend}>
            <Done />
          </Button>
          <Button onClick={handleRemoveFromFriends}>
            <Close />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

const FriendsPanel: React.FC = () => {
  const { friends, friendInvites = [], id: userId } = React.useContext(UserProfileContext)
  const { me, action } = React.useContext(Context)
  const isMyProfile = userId === me.id
  const showInvites = isMyProfile && friendInvites.length
  return (
    <>
      {showInvites && (
        <>
          <Typography gutterBottom variant="h5" align="center">
            Friend requests:
          </Typography>
          {friendInvites.map(invite => (
            <FriendInvite
              key={invite.id}
              user={invite}
              handleAcceptFriend={action.handleAcceptFriend(invite.id)}
              handleRemoveFromFriends={action.handleRemoveFromFriends(invite.id)}
            />
          ))}
          <Typography gutterBottom variant="h5" align="center">
            Friends:
          </Typography>
        </>
      )}
      {friends.map(friend => (
        <FriendCard key={friend.id} {...friend} />
      ))}
    </>
  )
}

export default FriendsPanel
