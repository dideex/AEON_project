import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography, Avatar, Divider } from '@material-ui/core'

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
    alignItems: 'center',
  },
  date: {
    color: theme.color.fontSecondary,
    fontSize: '0.8rem',
    marginLeft: 'auto',
  },
  body: {
    padding: theme.spacing(3, 2),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: theme.transitions.create('height'),
  },
  showMore: {
    color: theme.color.fontSecondary,
    textAlign: 'center',
    fontSize: '0.8rem',
    cursor: 'pointer',
  },
}))

const Post: React.FC<IPost> = props => {
  const { title, author, date, likes = [], photo, id, body } = props
  const classes = useStyles()
  const fullName = getFullName(author.firstname, author.lastname)

  const { handleLike } = React.useContext(Context).action
  const handleLikeBind = () => {
    handleLike(id)
  }

  const [isHovered, setHover] = React.useState<boolean>(false)

  const onHover = () => setHover(true)
  const onLeave = () => setHover(false)

  const [isCollapse, setCollapse] = React.useState<boolean | null>(null)
  const toggleCollapse = () => setCollapse(!isCollapse)

  const postBody = React.useRef<HTMLElement | null>(null)
  const postBodyText = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    if (!postBody.current) return
    if (postBody.current.clientHeight >= 100) {
      setCollapse(false)
    }
  }, [])
  const getCollapsedHeight = (): number | 'auto' => {
    if (!postBody.current) return 'auto'
    if (isCollapse) {
      return (postBodyText.current && postBodyText.current.clientHeight) || 'auto'
    } else {
      return 100
    }
  }
  const isCollapsable = isCollapse !== null
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
      <Typography
        ref={postBody}
        className={classes.body}
        style={{ height: getCollapsedHeight() }}
        variant="subtitle2"
      >
        <div ref={postBodyText} dangerouslySetInnerHTML={{ __html: body }} />
      </Typography>
      {isCollapsable && (
        <Typography
          onClick={toggleCollapse}
          className={classes.showMore}
          variant="subtitle2"
        >
          {isCollapse ? 'Hide' : 'Show more...'}
        </Typography>
      )}
      <Divider />
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
