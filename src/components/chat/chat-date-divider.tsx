import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core'

import { IChatDivider } from '../../types'
import { parseDate } from '../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    textAlign: 'center',
    color: theme.color.fontSecondary,
    margin: `${theme.spacing(3)}px 0`,
  },
}))

const ChatDivider: React.FC<IChatDivider> = ({ date }) => {
  const classes = useStyles()
  return <p className={classes.divider}>{parseDate(date)}</p>
}

export default ChatDivider
