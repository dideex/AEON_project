import * as React from 'react'
import { makeStyles, Theme, CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  inline: {
    position: 'absolute',
  },
  block: {
    margin: '0 auto',
  },
  spinner: {
    right: theme.spacing(3),
    color: theme.color.accent,
  },
}))

interface ILoading {
  type?: 'inline' | 'block'
}
const Loading: React.FC<ILoading> = ({ type = 'inline' }) => {
  const classes = useStyles()
  const className =
    classes.spinner + (type === 'inline' ? ` ${classes.inline}` : ` ${classes.block}`)
  return <CircularProgress color="secondary" size={24} className={className} />
}

export default Loading
