import * as React from 'react'
import { FormControl, InputLabel, Input, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    position: 'relative',
    marginTop: 0,
  },
  errorField: {
    position: 'absolute',
    top: '100%',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    backgroundColor: theme.palette.error.main,
    borderRadius: theme.shape.borderRadius,
  },
  errorMessage: {
    color: theme.palette.error.contrastText,
  },
  label: {
    color: theme.color.fontSecondary,
  },
}))

export type TInputType = 'text' | 'password'
export type TName =
  | 'username'
  | 'password'
  | 'firstname'
  | 'lastname'
  | 'city'
  | 'about'
  | 'patronymic'

const placeholder = {
  username: 'Email',
  password: 'Password',
  firstname: 'First name',
  lastname: 'Last name',
  city: 'City',
  about: 'About me',
  patronymic: 'Patronymic',
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

  const [isFocused, setFocus] = React.useState<boolean>(false)
  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)
  return (
    <FormControl margin="normal" required={required} fullWidth className={classes.wrap}>
      <InputLabel htmlFor={name} className={classes.label}>
        {placeholder[name]}
      </InputLabel>
      <Input
        error={showError}
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        id={name}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isFocused && showError && (
        <div className={classes.errorField}>
          <Typography className={classes.errorMessage} variant="subtitle2">
            {errorMessage}
          </Typography>
        </div>
      )}
    </FormControl>
  )
}

export default CustomInput
