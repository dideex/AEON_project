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
  accent: {
    color: theme.color.accent,
  },
  white: {
    color: 'white',
  },
}))

interface ILoading {
  type?: 'inline' | 'block'
  color?: 'white' | 'accent'
  size?: 'small' | 'medium' | 'large'
}
const Loading: React.FC<ILoading> = props => {
  const { type = 'inline', color = 'accent', size = 'medium' } = props
  const classes = useStyles()
  const className = [classes.spinner]
  className.push(classes[color])
  if (type === 'inline') {
    className.push(classes.inline)
  } else {
    className.push(classes.block)
  }
  const iternalSize = { medium: 24, small: 16, large: 46 }[size]
  return (
    <CircularProgress
      color="secondary"
      size={iternalSize}
      className={className.join(' ')}
    />
  )
}

export default Loading
