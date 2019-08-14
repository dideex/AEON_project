import * as React from 'react'
import { makeStyles, Theme, Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: theme.color.background,
  },
  title: {},
  image: {
    marginRight: theme.spacing(2),
  },
}))

interface IChatHeader {
  title: string
  url: string
}

const ChatHeader: React.FC<IChatHeader> = ({ title, url }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrap}>
      <Avatar className={classes.image} src={url} />
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
    </div>
  )
}

export default ChatHeader
