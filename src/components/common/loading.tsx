import * as React from 'react'
import { makeStyles, Theme, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  spinner: {
    position: 'absolute',
    right: theme.spacing(3),
    color: theme.color.accent,
  },
}))

export interface ILoading {}
const Loading: React.FC<ILoading> = () => {
  const classes = useStyles()
  return <CircularProgress color="secondary" size={24} className={classes.spinner} />
}

export default Loading
