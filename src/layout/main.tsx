import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.color.subAccent,
    },
  }),
)

const GET_USERS = gql`
  {
    getUsers {
      id
      firstname
      lastname
      patronymic
    }
  }
`

const Main: React.FC = () => {
  const classes = useStyles()
  const { loading, error } = useQuery(GET_USERS)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{`Error! ${error.message}`}</div>
  return <Paper className={classes.root}> Awesome app </Paper>
}

export default Main
