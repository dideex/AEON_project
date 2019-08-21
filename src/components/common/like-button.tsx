import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Theme, makeStyles, Typography } from '@material-ui/core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { CSSTransition } from 'react-transition-group'

const useStyles = makeStyles((theme: Theme) => ({
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
  heart: {
    color: theme.color.subAccent,
    fontSize: '2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8vw',
    },
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
}))

interface ILikeButton {
  children: React.ReactNode
  isHovered: boolean
  count: number
}

const LikeButton: React.FC<ILikeButton> = ({ children, isHovered, count }) => {
  const classes = useStyles()

  return (
    <div className={classes.likes}>
      <FontAwesomeIcon icon={faHeart} className={classes.heart} />
      <Typography className={classes.likesContent} variant="subtitle1">
        {count}
      </Typography>
      {Boolean(count) && (
        <CSSTransition in={isHovered} timeout={200} classNames={classes.transition}>
          {children}
        </CSSTransition>
      )}
    </div>
  )
}

export default LikeButton
