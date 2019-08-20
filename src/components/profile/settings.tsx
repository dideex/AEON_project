import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Paper, Typography, Grid } from '@material-ui/core'

import { Context, CustomInput, CustomSelect, AccentButton } from '../common'
import { IUserSettings, TMyInfo, IParsedDate } from '../../types'
import { months, days, years, month } from '../../constants'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Settings: React.FC = () => {
  const { me, action } = React.useContext(Context)
  const classes = useStyles()
  const initialState = getInitialState(me)
  const { birthdate: initilaDate } = me

  const [state, setState] = React.useState<Required<IUserSettings>>(initialState)
  const getInputProps = (name: keyof IUserSettings) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value })
    return {
      value: state[name],
      handleChange,
      name,
      disabled: false,
      required: false,
    }
  }

  const [birthdate, setBirthdate] = React.useState<IParsedDate>(initilaDate)
  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setBirthdate(oldState => ({
      ...oldState,
      [event.target.name as keyof IParsedDate]: event.target.value,
    }))
  }
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    // FIXME: replace it to container
    action.handleUpdateProfile({ ...state, ...birthdate })
  }
  return (
    <Paper className={classes.paper}>
      <Typography gutterBottom variant="h5">
        Edit personal data:
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid className={classes.form} container spacing={4}>
          {([
            'firstname',
            'lastname',
            'patronymic',
            'city',
          ] as (keyof IUserSettings)[]).map(name => (
            <Grid key={name} item xs={12} sm={6}>
              <CustomInput {...getInputProps(name)} type="text" />
            </Grid>
          ))}
          <Grid item xs={12} sm={4}>
            <CustomSelect
              name="month"
              handleChange={handleChange}
              options={months.map(monthId => ({ value: monthId, key: month[monthId] }))}
              value={birthdate.month}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CustomSelect
              name="day"
              handleChange={handleChange}
              options={days[birthdate.month]}
              value={birthdate.day}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <CustomSelect
              name="year"
              handleChange={handleChange}
              options={years}
              value={birthdate.year}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CustomInput {...getInputProps('about')} type="text" />
          </Grid>
        </Grid>
        <AccentButton title="Save" className={classes.submit} />
      </form>
    </Paper>
  )
}

function getInitialState(state: TMyInfo): Required<IUserSettings> {
  const { firstname, lastname, about = '', city = '', patronymic = '' } = state

  return { firstname, lastname, about, city, patronymic }
}

export default Settings
