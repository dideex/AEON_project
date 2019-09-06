import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'

import { MeQuery } from '../graphql/me.graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.color.subAccent,
    },
  }),
)

const Main: React.FC = () => {
  const classes = useStyles()
  const { loading, error } = useQuery(MeQuery)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{`Error! ${error.message}`}</div>
  return <Paper className={classes.root}> Awesome app </Paper>
}

export default Main
