import * as React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { birthdatePlaceholders } from '../../constants'
import { IParsedDate } from '../../types'

const useStyles = makeStyles(() => ({
  select: {
    width: '100%',
  },
}))

type IOptions = { value: number; key: string } | number

interface ICustomSelect {
  options: IOptions[]
  handleChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void
  value: number | string
  name: keyof IParsedDate
  required?: boolean
}

const CustomSelect: React.FC<ICustomSelect> = props => {
  const { options, required = true, handleChange, value, name } = props
  const classes = useStyles()
  return (
    <FormControl className={classes.select} required={required}>
      <InputLabel htmlFor={birthdatePlaceholders[name]}>
        {birthdatePlaceholders[name]}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        name={name}
        inputProps={{
          name,
          id: birthdatePlaceholders[name],
        }}
      >
        {options.map(o => {
          const key = typeof o === 'object' ? o.key : o
          const value = typeof o === 'object' ? o.value : o
          return (
            <MenuItem key={value} value={value}>
              {key}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
