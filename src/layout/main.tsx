import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

interface CompProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.color.subAccent,
    },
  }),
)

const Main: React.FC<CompProps> = _ => {
  const classes = useStyles()
  return <Paper className={classes.root}> Awesome app </Paper>
}

export default Main
