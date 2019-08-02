import * as React from 'react'
import { Theme, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context } from '../../common'
import { IUserPreview } from '../../../types'
import { getFullName } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  content: {
    paddingLeft: theme.spacing(2)
  },
  about: {
    color: theme.palette.text.secondary,
  },
  avatar: {
    width: '8vw',
    height: '8vw',
    
    [theme.breakpoints.down('sm')]: {
      width: '20vw',
      height: '20vw',
    },
  },
}))

type IFriendCard = IUserPreview

const FriendCard: React.FC<IFriendCard> = props => {
  const classes = useStyles()
  const { id, firstname, lastname, age, avatar, isOnline, about } = props
  return (
    <div className={classes.card}>
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt={getFullName(firstname, lastname)}
      />
      <div className={classes.content}>
        <Typography variant="h5">
          {getFullName(firstname, lastname)}, {age}
        </Typography>
        <Typography className={classes.about} variant="h6">
          {about}
        </Typography>
      </div>
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
