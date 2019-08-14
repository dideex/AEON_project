import * as React from 'react'
import {
  Typography,
  Theme,
  Avatar,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Chip,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Masonry from 'react-masonry-component'
import { CSSTransition } from 'react-transition-group'

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
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    cursor: 'pointer',
  },
  friendsPopover: {
    display: 'none',
    zIndex: 9,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    padding: `${theme.spacing(1)}px`,
    backgroundColor: 'white',
    boxShadow: theme.settings.boxShadow,
    borderRadius: theme.shape.borderRadius,
    transform: 'translateY(-25px)',
  },
  transition: {
    '&-enter': {
      opacity: 0,
      display: 'flex',
    },
    '&-enter-done': {
      opacity: 1,
      display: 'flex',
      transform: 'translateY(0)',
    },
    '&-enter-active': {
      opacity: 1,
      display: 'flex',
      transform: 'translateY(0)',
      transition: theme.transitions.create(['transform', 'opacity'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    '&-exit': {
      opacity: 1,
      display: 'flex',
      transform: 'translateY(0)',
    },
    '&-exit-done': {
      display: 'none',
    },
    '&-exit-active': {
      opacity: 0,
      transition: 'transform 200ms, opacity 200ms',
    },
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

interface IFriendsPopover {
  likes: IUserPreview[]
}

const FriendsPopover: React.FC<IFriendsPopover> = ({ likes }) => {
  const classes = useStyles()
  return (
    <div className={classes.friendsPopover}>
      {likes.slice(0, 5).map((like, i) => (
        <Tooltip
          key={i}
          enterDelay={500}
          title={getFullName(like.firstname, like.lastname, like.patronymic)}
          aria-label={getFullName(like.firstname, like.lastname, like.patronymic)}
        >
          <Avatar
            src={like.avatar}
            alt={getFullName(like.firstname, like.lastname, like.patronymic)}
          />
        </Tooltip>
      ))}
    </div>
  )
}

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
        <div className={classes.likes} onClick={handleLike} onMouseEnter={onHover}>
          <FontAwesomeIcon icon={faHeart} className={classes.heart} />
          <Typography className={classes.likesContent} variant="subtitle1">
            {likes.length}
          </Typography>
          {Boolean(likes.length) && (
            <CSSTransition in={isHovered} timeout={200} classNames={classes.transition}>
              <FriendsPopover likes={likes} />
            </CSSTransition>
          )}
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
