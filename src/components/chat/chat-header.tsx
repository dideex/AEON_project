import * as React from 'react'
import { makeStyles, Theme, Avatar, Typography } from '@material-ui/core'
import { TChatType } from '../../types'
import { VerticalMenu } from '../common'

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
  id: string
  title: string
  url: string
  type: TChatType
  isOwner: boolean
}

const ChatHeader: React.FC<IChatHeader> = ({ title, url, type, isOwner }) => {
  const classes = useStyles()
  const groupOptions = isOwner
    ? [
        { label: 'Change title', onClick: () => {} },
        { label: 'Change avatar', onClick: () => {} },
        { label: 'Delete group', onClick: () => {} },
      ]
    : [{ label: 'Leave from chat', onClick: () => {} }]
  const privateOptions = [{ label: 'Delete chat', onClick: () => {} }]
  return (
    <div className={classes.wrap}>
      <Avatar className={classes.image} src={url} />
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      {
        {
          group: <VerticalMenu options={groupOptions} />,
          private: <VerticalMenu options={privateOptions} />,
        }[type]
      }
    </div>
  )
}

export default ChatHeader
