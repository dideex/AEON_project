import * as React from 'react'
import { FormControl, InputLabel, Input, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    marginTop: 0
  }
}))

export type TInputType = 'text' | 'password'
export type TName = 'username' | 'password' | 'firstname' | 'lastname' | 'city'

export interface ICustomInput {
  name: TName
  type: TInputType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  disabled: boolean
  required?: boolean
}

const placeholder = {
  username: 'Email',
  password: 'Password',
  firstname: 'First name',
  lastname: 'Last name',
  city: 'City',
}

const CustomInput: React.FC<ICustomInput> = ({
  name,
  type,
  handleChange,
  value = '',
  disabled,
  required = true
}) => {
  const classes = useStyles()
  return (
    <FormControl margin="normal" required={required} fullWidth className={classes.wrap}>
      <InputLabel htmlFor={name}>{placeholder[name]}</InputLabel>
      <Input
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        id={name}
        disabled={disabled}
      />
    </FormControl>
  )
}

export default CustomInput
