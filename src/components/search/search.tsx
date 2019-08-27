import * as React from 'react'
import { Typography, makeStyles, Theme, Grid, Paper } from '@material-ui/core'

import { Loading, UserGridContext, CustomInput, AccentButton } from '../common'
import UserCard from './user-card'

const useStyles = makeStyles((theme: Theme) => ({
  title: {},
  users: {},
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(4),
    width: '30%',
  },
}))

const Search: React.FC = () => {
  const { loading, users } = React.useContext(UserGridContext)
  const classes = useStyles()
  const [value, setValue] = React.useState({ search: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ search: e.target.value })
  }
  return (
    <>
      <Paper className={classes.paper}>
        <CustomInput
          value={value.search}
          handleChange={handleChange}
          name="search"
          required={false}
        />
        <AccentButton isLoading={loading} className={classes.button} title="Search" />
      </Paper>
      <Paper className={classes.paper}>
        <Typography gutterBottom variant="h5" className={classes.title}>
          We have found:
        </Typography>
        <Grid container className={classes.users}>
          {loading ? (
            <Loading type="block" />
          ) : (
            users.map(user => <UserCard key={user.id} {...user} />)
          )}
        </Grid>
      </Paper>
    </>
  )
}

export default Search
