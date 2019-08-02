import * as React from 'react'
import { Typography, Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Masonry from 'react-masonry-component'

import { Context } from '../../common'
import { IPhoto } from '../../../types'
import { parseDate } from '../../../utils'

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
  date: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary,
  },
  likes: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minWidth: '20%',
    cursor: 'pointer',
  },
  likesContent: {
    padding: theme.spacing(1),
  },
  tail: {
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing(1)}px`,
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
  friendsPopover: {},
}))

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
          <Typography className={classes.likesContent} variant="h5">
            {likes.length}
          </Typography>
          {likes.length && <div className={classes.friendsPopover}>render friends</div>}
        </div>
        <div className={classes.date}>
          <Typography variant="subtitle1">{parseDate(date)}</Typography>
        </div>
      </div>
    </div>
  )
}

const masonryOptions = { transitionDuration: 0 }
const GalleryPanel: React.FC = () => {
  const { photos = [] } = React.useContext(Context).me
  return (
    <Masonry
      className="my-gallery-class" // default ''
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {photos.map(photo => (
        <GalleryPost key={photo.id} {...photo} />
      ))}
    </Masonry>
  )
}

export default GalleryPanel
