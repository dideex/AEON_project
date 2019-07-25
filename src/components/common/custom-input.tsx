import * as React from 'react'
import { FormControl, InputLabel, Input } from '@material-ui/core'

type TInputType = 'text' | 'password'

export interface ICustomInput {
  name: string
  type: TInputType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const CustomInput: React.FC<ICustomInput> = ({
  name,
  type,
  handleChange,
  value = ''
}) => {
  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor={name}>{name}</InputLabel>
      <Input
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        id={name}
      />
    </FormControl>
  )
}

export default CustomInput
