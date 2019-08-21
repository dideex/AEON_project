import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography, Avatar } from '@material-ui/core'

import { IPost } from '../../types'
import { getFullName } from '../../utils'
import { parseDateAgo } from '../../utils/parseDate'
import { LikeButton, UsersPopover, Context } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    padding: theme.spacing(0, 0, 2),
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: theme.color.fontSecondary,
    margin: theme.spacing(1, 0),
  },
  author: {
    textAlign: 'center',
  },
  avatar: {
    margin: '0 auto',
  },
  image: {
    width: '100%',
  },
  likes: {
    fontSize: '0.8rem',
  },
  bottom: {
    padding: theme.spacing(1, 2),
    display: 'flex',
  },
  date: {
    color: theme.color.fontSecondary,
    fontSize: '0.8rem',
    marginLeft: 'auto',
  },
}))

const Post: React.FC<IPost> = props => {
  const { title, author, date, likes = [], photo, id } = props
  const classes = useStyles()
  const fullName = getFullName(author.firstname, author.lastname)

  const { handleLike } = React.useContext(Context).action
  const handleLikeBind = () => {
    handleLike(id)
  }

  const [isHovered, setHover] = React.useState<boolean>(false)

  const onHover = () => setHover(true)
  const onLeave = () => setHover(false)
  return (
    <div className={classes.wrap} onMouseLeave={onLeave}>
      <div className={classes.author}>
        <Avatar className={classes.avatar} src={author.avatar} alt={fullName} />
        <Typography variant="subtitle1">{fullName}</Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      {photo && <img className={classes.image} src={photo} alt={title} />}
      <div className={classes.bottom}>
        <div onClick={handleLikeBind} onMouseEnter={onHover}>
          <LikeButton isHovered={isHovered} count={likes.length}>
            <UsersPopover users={likes} />
          </LikeButton>
        </div>
        <Typography variant="subtitle2" className={classes.date}>
          {parseDateAgo(date)}
        </Typography>
      </div>
    </div>
  )
}

export default Post
