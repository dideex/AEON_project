import * as React from 'react'
import { Typography, makeStyles, Theme, Grid, Paper } from '@material-ui/core'

import { Loading, UserGridContext } from '../common'
import UserCard from './user-card'

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  users: {},
  root: {
    padding: theme.spacing(2),
  },
}))

const Search: React.FC = () => {
  const { loading, users } = React.useContext(UserGridContext)
  const classes = useStyles()
  if (loading) return <Loading />
  return (
    <Paper className={classes.root}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        We have found:
      </Typography>
      <Grid container className={classes.users}>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </Grid>
    </Paper>
  )
}

export default Search
