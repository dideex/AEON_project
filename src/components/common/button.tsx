import * as React from 'react'
import { Button, Theme } from '@material-ui/core'
import { deepPurple } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/styles'
import { Loading } from '.'

export interface ICustomButton {
  title: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  classes?: any
  isLoading?: boolean
}

const CustomButton: React.FC<ICustomButton> = props => {
  const { title, className = '', onClick = () => {}, classes, isLoading } = props
  const customClassName = className ? `${className} ${classes.root}` : 'classes.root'
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={customClassName}
      onClick={onClick}
      disabled={isLoading}
    >
      {title}
      {isLoading && <Loading />}
    </Button>
  )
}

export const AccentButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.color.accent),
    backgroundColor: theme.color.accent,
    '&:hover': {
      backgroundColor: deepPurple[500],
    },
  },
}))(CustomButton)
