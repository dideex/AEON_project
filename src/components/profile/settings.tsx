import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Paper, Typography } from '@material-ui/core'

import { Context, CustomInput } from '../common'
import { IUserSettings, TMyInfo } from '../../types'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}))

const Settings: React.FC = () => {
  const { me } = React.useContext(Context)
  const classes = useStyles()
  const initialState = getInitialState(me)

  const [state, setState] = React.useState<Required<IUserSettings>>(initialState)
  const getInputProps = (name: keyof IUserSettings) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value })
    return {
      value: state[name],
      handleChange,
      name,
      disabled: false,
    }
  }
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5">Edit personal data:</Typography>
      <CustomInput {...getInputProps('firstname')} type="text" />
    </Paper>
  )
}

function getInitialState(state: TMyInfo): Required<IUserSettings> {
  const { firstname, lastname, about = '', city = '', patronymic = '' } = state

  return { firstname, lastname, about, city, patronymic }
}

export default Settings
