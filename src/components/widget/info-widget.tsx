import * as React from 'react'
import { Paper, makeStyles, Theme, Typography, Divider, Avatar } from '@material-ui/core'

import { IUserPreview } from '../../types'
import { getFullName } from '../../utils'
import { Link, InfoContext } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2, 0),
  },
  padding: {
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  accountWrap: {
    display: 'flex',
  },
  accountContent: {
    paddingLeft: theme.spacing(2),
  },
  userAbout: {
    color: theme.color.fontSecondary,
    fontSize: '0.8rem',
    lineHeight: 1.2,
  },
  manage: {
    color: theme.color.fontSecondary,
    fontSize: '0.8rem',
  },
  invites: {
    fontSize: '1rem',
  },
}))

const InfoWidget: React.FC = () => {
  const classes = useStyles()
  const { users, friendInvites, chatInvites } = React.useContext(InfoContext)
  return (
    <Paper className={classes.paper}>
      <div className={classes.padding}>
        <Typography variant="h6">People you may know:</Typography>
      </div>
      {users.map(user => (
        <React.Fragment key={user.id}>
          <Divider className={classes.divider} />
          <div className={classes.padding}>
            <AccountPreview {...user} />
          </div>
        </React.Fragment>
      ))}
      {Boolean(friendInvites) && (
        <>
          <Divider className={classes.divider} />
          <div className={classes.padding}>
            <Typography className={classes.invites} variant="h6">
              {friendInvites} friend invintation
            </Typography>
            <Link className={classes.manage} to="/friends">
              Manage
            </Link>
          </div>
        </>
      )}
      {Boolean(chatInvites) && (
        <>
          <Divider className={classes.divider} />
          <div className={classes.padding}>
            <Typography className={classes.invites} variant="h6">
              {chatInvites} chat invintation
            </Typography>
            <Link className={classes.manage} to="/chat">
              Manage
            </Link>
          </div>
        </>
      )}
    </Paper>
  )
}

function AccountPreview(props: IUserPreview) {
  const { firstname, lastname, avatar, about } = props
  const classes = useStyles()
  const fullname = getFullName(firstname, lastname)
  return (
    <div className={classes.accountWrap}>
      <Avatar src={avatar} alt={fullname} />
      <div className={classes.accountContent}>
        <Typography variant="h6">{fullname}</Typography>
        {about && (
          <Typography variant="subtitle1" className={classes.userAbout}>
            {about}
          </Typography>
        )}
      </div>
    </div>
  )
}

export default InfoWidget
