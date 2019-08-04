import * as React from 'react'
import { Paper, Avatar, Typography, Theme, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context } from '../../common'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    textAlign: 'center',
  },
  padding: {
    padding: theme.spacing(2),
  },
  stats: {
    padding: theme.spacing(2),
    flex: '49% 1 0',
    textAlign: 'center',
    boxSizing: 'border-box',
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
  container: {
    display: 'flex',
  },
  divider: {
    width: '1px',
    backgroundColor: theme.palette.divider,
  },
  ttu: {
    textTransform: 'uppercase',
  },
}))

const ProfileWidget: React.FC = () => {
  const { me } = React.useContext(Context)
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <div className={classes.padding}>
        <Avatar className={classes.avatar} src={me.avatar} />
        <Typography variant="h5" gutterBottom className={classes.ttu}>
          {me.firstname} {me.lastname}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {me.about}
        </Typography>
      </div>
      <Divider />
      <div className={classes.container}>
        <div className={classes.stats}>
          <Typography variant="h5">{me.statistic.likes}</Typography>
          <Typography className={classes.ttu} variant="subtitle1">
            Likes
          </Typography>
        </div>
        <div className={classes.divider} />
        <div className={classes.stats}>
          <Typography variant="h5">{me.statistic.posts}</Typography>
          <Typography className={classes.ttu} variant="subtitle1">
            Posts
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default ProfileWidget
