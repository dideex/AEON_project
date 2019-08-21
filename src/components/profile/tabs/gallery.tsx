import * as React from 'react'
import {
  Typography,
  Theme,
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Masonry from 'react-masonry-component'

import { Context, UsersPopover, LikeButton } from '../../common'
import { IPhoto } from '../../../types'
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
      margin: 0,
    },
  },
  head: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  tail: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    padding: theme.spacing(0, 1),
  },
  date: {
    marginLeft: 'auto',
    color: theme.color.fontSecondary,
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    cursor: 'pointer',
  },
  fullImage: {
    width: '100%',
  },
  modalLikes: {
    padding: theme.spacing(4),
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    color: 'white',
  },
}))

interface IGalleryPost extends IPhoto {
  handleLike: (e: React.MouseEvent<HTMLDivElement>) => void
}

const GalleryPost: React.FC<IGalleryPost> = props => {
  const classes = useStyles()
  const { title, date, url, likes = [], handleLike } = props
  const [isHovered, setHover] = React.useState<boolean>(false)

  const [isOpenModal, setOpenModal] = React.useState<boolean>(false)
  const openModal = () => setOpenModal(true)
  const closeModal = () => setOpenModal(false)
  const onHover = () => setHover(true)
  const onLeave = () => setHover(false)
  const getModal = () => (
    <Dialog
      open={isOpenModal}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <img className={classes.fullImage} src={url} alt={title} />
      </DialogContent>
      {Boolean(likes.length) && (
        <DialogActions className={classes.modalLikes}>
          <Typography variant="h6"> Likes:</Typography>
          {likes.map(person => (
            <Chip
              key={person.id}
              color="secondary"
              avatar={<Avatar src={person.avatar} />}
              label={getFullName(person.firstname, person.lastname, person.patronymic)}
              className={classes.chip}
            />
          ))}
        </DialogActions>
      )}
    </Dialog>
  )

  return (
    <div className={classes.grid} onMouseLeave={onLeave}>
      <div onClick={openModal} className={classes.head}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
      </div>
      <img className={classes.image} src={url} alt={title} onClick={openModal} />
      <div className={classes.tail}>
        <div onClick={handleLike} onMouseEnter={onHover}>
          <LikeButton isHovered={isHovered} count={likes.length}>
            <UsersPopover users={likes} />
          </LikeButton>
        </div>
        <div className={classes.date}>
          <Typography variant="subtitle1">{parseDateAgo(date)}</Typography>
        </div>
      </div>
      {getModal()}
    </div>
  )
}

const GalleryPanel: React.FC = () => {
  const classes = useStyles()
  const {
    me: { photos = [] },
    action: { handleLike },
  } = React.useContext(Context)
  return (
    <Masonry
      className={classes.root}
      style={{ overflow: 'hidden' }}
      options={{ transitionDuration: 0 }}
    >
      {photos.map(photo => (
        <GalleryPost key={photo.id} handleLike={handleLike(photo.id)} {...photo} />
      ))}
    </Masonry>
  )
}

export default GalleryPanel
