import * as React from 'react'
import { Typography, Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Masonry from 'react-masonry-component'

import { Context } from '../../common'
import { IPhoto, IUserPreview } from '../../../types'
import { parseDate, getFullName } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
  },
}))

interface IFriendsPopover {
  likes: IUserPreview[]
}

const FriendsPopover: React.FC<IFriendsPopover> = ({ likes }) => {
  const classes = useStyles()
  return (
    <div className={classes.friendsPopover}>
      {likes.map(like => (
        <div>{getFullName(like.firstname, like.lastname)}</div>
      ))}
    </div>
  )
}

type IGalleryPost = IPhoto

const GalleryPost: React.FC<IGalleryPost> = props => {
  const classes = useStyles()
  const { id, title, date, url, likes = [] } = props
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
          <Typography variant="subtitle1">{parseDate(date)}</Typography>
        </div>
      </div>
    </div>
  )
}

const GalleryPanel: React.FC = () => {
  const { photos = [] } = React.useContext(Context).me
  return (
    <Masonry options={{ transitionDuration: 0 }}>
      {photos.map(photo => (
        <GalleryPost key={photo.id} {...photo} />
      ))}
    </Masonry>
  )
}

export default GalleryPanel
