import * as React from 'react'
import { Grid, Theme, Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { PersonAdd, Remove } from '@material-ui/icons'

import { IUserPreview } from '../../types'
import { getFullName } from '../../utils'
import { Context } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  avatar: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2),
      width: '15vh',
      height: '15vh',
    },
  },
  content: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  about: {
    color: theme.color.fontSecondary,
    lineHeight: 1.2,
  },
  control: {
    paddingRight: theme.spacing(2),
    marginLeft: 'auto',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      marginRight: 'auto',
    },
  },
}))

const UserCard: React.FC<IUserPreview> = props => {
  const { firstname, lastname, patronymic, avatar, about, id } = props
  const classes = useStyles()
  const fullName = getFullName(firstname, lastname, patronymic)
  const { me } = React.useContext(Context)
  const isFriend = Boolean(me.friends.find(friend => friend.id === id))
  return (
    <Grid item sm={4} xs={6} className={classes.wrap}>
      <Avatar className={classes.avatar} src={avatar} alt={fullName} />
      <div className={classes.content}>
        <Typography variant="subtitle1">{fullName}</Typography>
        {Boolean(about) && (
          <Typography className={classes.about} variant="subtitle2">
            {about}
          </Typography>
        )}
      </div>
      <div className={classes.control}>{isFriend ? <Remove /> : <PersonAdd />}</div>
    </Grid>
  )
}

export default UserCard
