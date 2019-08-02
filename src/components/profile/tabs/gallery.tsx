import * as React from 'react'
import { Typography, Theme, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { Context } from '../../common'
import { IPhoto } from '../../../types'
import { parseDate } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  grid: {},
  head: {
    textAlign: 'center',
  },
  date: {
    marginLeft: 'auto',
    color: theme.palette.text.secondary,
  },
  likes: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
  },
  likesContent: {
    padding: theme.spacing(1),
  },
  tail: {
    display: 'flex',
    alignItems: 'center',
  },
  heart: {
    color: theme.color.subAccent,
    fontSize: '3vw',
  },
  image: {
    width: '100%',
  },
}))

type IGalleryPost = IPhoto

const GalleryPost: React.FC<IGalleryPost> = props => {
  const classes = useStyles()
  const { id, title, date, url, likes = [] } = props
  return (
    <Grid className={classes.grid} item xs={6} sm={4}>
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
        </div>
        <div className={classes.date}>
          <Typography variant="subtitle1">{parseDate(date)}</Typography>
        </div>
      </div>
    </Grid>
  )
}

const GalleryPanel: React.FC = () => {
  const { photos = [] } = React.useContext(Context).me
  return (
    <Grid container>
      {photos.map(photo => (
        <GalleryPost key={photo.id} {...photo} />
      ))}
    </Grid>
  )
}

export default GalleryPanel
