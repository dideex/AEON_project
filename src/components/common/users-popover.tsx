import * as React from 'react'
import { Tooltip, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { IUserPreview } from '../../types'
import { getFullName } from '../../utils'

const useStyles = makeStyles(() => ({
  friendsPopover: {
    display: 'none',
    zIndex: 9,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    // padding: theme.spacing(1),
    // backgroundColor: 'white',
    // boxShadow: theme.settings.boxShadow,
    // borderRadius: theme.shape.borderRadius,
    transform: 'translateY(-25px)',
  },
}))

interface IFriendsPopover {
  users: IUserPreview[]
}

const UsersPopover: React.FC<IFriendsPopover> = ({ users }) => {
  const classes = useStyles()
  return (
    <div className={classes.friendsPopover}>
      {users.slice(0, 5).map((like, i) => (
        <Tooltip
          key={i}
          enterDelay={500}
          title={getFullName(like.firstname, like.lastname, like.patronymic)}
          aria-label={getFullName(like.firstname, like.lastname, like.patronymic)}
        >
          <Avatar
            src={like.avatar}
            alt={getFullName(like.firstname, like.lastname, like.patronymic)}
          />
        </Tooltip>
      ))}
    </div>
  )
}

export default UsersPopover
