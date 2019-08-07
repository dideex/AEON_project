import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import AuthHeader from './auth-header'
import { CustomInput, AccentButton, CustomSelect } from '../common'
import { validator } from '../../utils'
import { IUserBio, IUserRequest, IParsedDate } from '../../types'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { months, month, birthdatePlaceholders, days, years } from '../../constants'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.color.background,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.color.subAccent,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    width: '100%',
  },
}))

const errors = {
  username: 'Enter correct e-mail',
  password: 'Password should be more than 6 letters',
  firstname: 'Field should contain more than 3 letters',
  lastname: 'Field should contain more than 3 letters',
  city: '',
}

interface CompProps {
  handleSubmit: (data: IUserRequest) => void
  isLoading: boolean
}

export type IUserStringFileds = IUserRequest & IUserBio

// TODO: Add birth date fields
export const Register: React.FC<CompProps> = props => {
  const { isLoading } = props
  const classes = useStyles()
  const [state, setState] = React.useState<IUserStringFileds>({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
  })
  const [forceTouch, setForceTouch] = React.useState<boolean>(false)

  const getInputProps = (name: keyof IUserStringFileds) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value || '' })
    return {
      value: state[name] as string,
      handleChange,
      name,
      disabled: isLoading,
      errorMessage: errors[name],
      showError: forceTouch && validator(name, state[name] as string),
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    // FIXME: replace it to container
    setForceTouch(true)
    props.handleSubmit(state)
  }

  const [values, setValues] = React.useState<IParsedDate>({
    month: 0,
    year: 2000,
    day: 1,
  })

  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as keyof IParsedDate]: event.target.value,
    }))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <AuthHeader theme={classes.avatar} title="Aeon sign up" Icon={LockOutlinedIcon} />
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomInput {...getInputProps('firstname')} type="text" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput {...getInputProps('lastname')} type="text" />
            </Grid>
            <Grid item xs={12}>
              <CustomInput {...getInputProps('username')} type="text" />
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
            <Grid item xs={12}>
              <CustomInput {...getInputProps('city')} type="text" required={false} />
            </Grid>
            <Grid item xs={12}>
              <CustomInput {...getInputProps('password')} type="password" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration"
              />
            </Grid>
          </Grid>
          <AccentButton
            title="Sign up"
            className={classes.submit}
            isLoading={isLoading}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/auth" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
export default Register
