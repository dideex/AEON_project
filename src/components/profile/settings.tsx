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
  const { me } = React.useContext(Context)
  const classes = useStyles()
  const initialState = getInitialState(me)
  const { birthDate: initilaDate } = me

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

  const [values, setValues] = React.useState<IParsedDate>(initilaDate)
  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as keyof IParsedDate]: event.target.value,
    }))
  }
  return (
    <Paper className={classes.paper}>
      <Typography gutterBottom variant="h5">
        Edit personal data:
      </Typography>
      <Grid className={classes.form} container spacing={4}>
        <Grid item sm={12} md={6}>
          <CustomInput {...getInputProps('firstname')} type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomInput {...getInputProps('lastname')} type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomInput {...getInputProps('patronymic')} type="text" />
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomInput {...getInputProps('city')} type="text" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomSelect
            name="month"
            handleChange={handleChange}
            options={months.map(monthId => ({ value: monthId, key: month[monthId] }))}
            value={values.month}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <CustomSelect
            name="day"
            handleChange={handleChange}
            options={days[values.month]}
            value={values.day}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <CustomSelect
            name="year"
            handleChange={handleChange}
            options={years}
            value={values.year}
          />
        </Grid>
        <Grid item sm={12} md={12}>
          <CustomInput {...getInputProps('about')} type="text" />
        </Grid>
      </Grid>
      <AccentButton title="Save" className={classes.submit} />
    </Paper>
  )
}

function getInitialState(state: TMyInfo): Required<IUserSettings> {
  const { firstname, lastname, about = '', city = '', patronymic = '' } = state

  return { firstname, lastname, about, city, patronymic }
}

export default Settings
