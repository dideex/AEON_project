import * as React from 'react'
import { Paper, Avatar, Typography, Theme, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Skeleton } from '@material-ui/lab'

import { Context, Loading } from '../common'
import { getSkeletonUserInfo } from '../../utils'

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
  about: {
    color: theme.color.fontSecondary,
  },
}))

const ProfileWidget: React.FC = () => {
  const classes = useStyles()
  const { me, loading } = React.useContext(Context)
  if (!me) return null

  const getUserInfo = () => (
    <>
      <Typography variant="h5" gutterBottom className={classes.ttu}>
        {me.firstname} {me.lastname}
      </Typography>
      <Typography className={classes.about} variant="caption" color="textPrimary">
        {me.about}
      </Typography>
    </>
  )

  const getTotalLikes = () => (
    <>
      <Typography variant="h5">{me.statistic.likes}</Typography>
      <Typography className={classes.ttu} variant="subtitle1">
        Likes
      </Typography>
    </>
  )

  const getTotalPosts = () => (
    <>
      <Typography variant="h5">{me.statistic.posts}</Typography>
      <Typography className={classes.ttu} variant="subtitle1">
        Posts
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
          <Avatar className={classes.avatar} src={me.avatar} />
        )}

        {loading ? getSkeletonUserInfo() : getUserInfo()}
      </div>
      <Divider />
      <div className={classes.container}>
        <div className={classes.stats}>
          {loading ? <Skeleton height={50} /> : getTotalLikes()}
        </div>
        <div className={classes.divider} />
        <div className={classes.stats}>
          {loading ? <Skeleton height={50} /> : getTotalPosts()}
        </div>
      </div>
    </Paper>
  )
}

export default ProfileWidget
