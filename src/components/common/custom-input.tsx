import * as React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Theme,
  Popover,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    marginTop: 0,
  },
  paper: {
    marginTop: theme.spacing(.5),
    marginLeft: theme.spacing(.5),
    padding: `${theme.spacing(.5)}px ${theme.spacing(1)}px`,
    backgroundColor: theme.palette.error.main,
  },
  errorMessage: {
    color: theme.palette.error.contrastText,
  },
}))

export type TInputType = 'text' | 'password'
export type TName = 'username' | 'password' | 'firstname' | 'lastname' | 'city'

const placeholder = {
  username: 'Email',
  password: 'Password',
  firstname: 'First name',
  lastname: 'Last name',
  city: 'City',
}

export interface ICustomInput {
  name: TName
  type: TInputType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  disabled: boolean
  required?: boolean
  errorMessage?: string
  showError?: boolean
}

const CustomInput: React.FC<ICustomInput> = props => {
  const {
    name,
    type,
    handleChange,
    value = '',
    disabled,
    required = true,
    errorMessage = '',
    showError = false,
  } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  React.useEffect(() => {
    setAnchorEl(inputRef.current)
  }, [])
  return (
    <FormControl margin="normal" required={required} fullWidth className={classes.wrap}>
      <InputLabel htmlFor={name}>{placeholder[name]}</InputLabel>
      <Input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        id={name}
        disabled={disabled}
      />
      <Popover
        open={showError}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{
          paper: classes.paper,
        }}
        disableRestoreFocus
      >
        <Typography className={classes.errorMessage} variant="subtitle2">
          {errorMessage}
        </Typography>
      </Popover>
    </FormControl>
  )
}

export default CustomInput
