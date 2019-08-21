import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

import { IPost } from '../../types'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    padding: theme.spacing(2, 0),
  },
}))

const Post: React.FC<IPost> = props => {
  const classes = useStyles()
  return <div className={classes.wrap}>{props.title}</div>
}

export default Post
