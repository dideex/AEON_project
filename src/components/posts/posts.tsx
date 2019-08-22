import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Paper } from '@material-ui/core'

import Post from './post'
import { IPost } from '../../types'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    padding: theme.spacing(2, 0),
  },
}))

interface IPosts {
  posts: IPost[]
}

const Posts: React.FC<IPosts> = ({ posts }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.wrap}>
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </Paper>
  )
}

export default Posts
