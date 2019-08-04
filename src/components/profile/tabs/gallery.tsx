import * as React from 'react'
import { Typography, Theme, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Masonry from 'react-masonry-component'

import { Context } from '../../common'
import { IPhoto, IUserPreview } from '../../../types'
import { getFullName } from '../../../utils'
import { parseDateAgo } from '../../../utils/parseDate'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  grid: {
    margin: '0 1.5%',
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  head: {
    textAlign: 'center',
  },
  tail: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: `0 ${theme.spacing(1)}px`,
  },
  date: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary,
  },
  likes: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '20%',
    cursor: 'pointer',
    '&:hover > div': {
      opacity: 1,
    },
  },
  likesContent: {
    padding: theme.spacing(1),
  },
  heart: {
    color: theme.color.subAccent,
    fontSize: '2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8vw',
    },
  },
  image: {
    borderRadius: theme.settings.borderRadius,
    width: '100%',
  },
  friendsPopover: {
    opacity: 0,
    zIndex: 9,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    display: 'flex',
    padding: `${theme.spacing(1)}px`,
    backgroundColor: 'white',
    boxShadow: theme.settings.boxShadow,
    borderRadius: theme.settings.borderRadius,
  },
}))

interface IFriendsPopover {
  likes: IUserPreview[]
}

const FriendsPopover: React.FC<IFriendsPopover> = ({ likes }) => {
  const classes = useStyles()
  return (
    <div className={classes.friendsPopover}>
      {likes.slice(0, 5).map(like => (
        <div>
          <Avatar
            src={like.avatar}
            alt={getFullName(like.firstname, like.lastname, like.patronymic)}
          />
        </div>
      ))}
    </div>
  )
}

type IGalleryPost = IPhoto

const GalleryPost: React.FC<IGalleryPost> = props => {
  const classes = useStyles()
  const { title, date, url, likes = [] } = props
  return (
    <div className={classes.grid}>
      <div className={classes.head}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </div>
      <img className={classes.image} src={url} alt="" />
      <div className={classes.tail}>
        <div className={classes.likes}>
          <FontAwesomeIcon icon={faHeart} className={classes.heart} />
          <Typography className={classes.likesContent} variant="subtitle1">
            {likes.length}
          </Typography>
          {Boolean(likes.length) && <FriendsPopover likes={likes} />}
        </div>
        <div className={classes.date}>
          <Typography variant="subtitle1">{parseDateAgo(date)}</Typography>
        </div>
      </div>
    </div>
  )
}

const GalleryPanel: React.FC = () => {
  const classes = useStyles()
  const { photos = [] } = React.useContext(Context).me
  return (
    <Masonry
      className={classes.root}
      style={{ overflow: 'hidden' }}
      options={{ transitionDuration: 0 }}
    >
      {photos.map(photo => (
        <GalleryPost key={photo.id} {...photo} />
      ))}
    </Masonry>
  )
}

export default GalleryPanel
