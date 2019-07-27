import * as React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

type TInputType = 'text' | 'password'
type TName = 'username' | 'password' | 'firstname' | 'lastname' | 'city'

export interface ICustomInput {
  name: TName
  type: TInputType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  disabled: boolean
}

const placeholder = {
  username: 'Username',
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
}) => {
  return (
    <FormControl margin="normal" required fullWidth>
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
