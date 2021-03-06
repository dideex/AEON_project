import * as React from 'react'
import { makeStyles, Theme, Container, CssBaseline, Grid } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/Face'

import { IUserRequest } from '../../types'
import { CustomInput, AccentButton, UserAuthContext } from '../common'
import AuthHeader from './auth-header'
import { trimObject } from '../../utils'

const useStyles = makeStyles((theme: Theme) => ({
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
    backgroundColor: theme.color.accent,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    position: 'relative',
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.color.accent,
  },
}))

interface AuthProps {
  handleSubmit?: (data: IUserRequest) => void
  isLoading?: boolean
}

const Auth: React.FC<AuthProps> = props => {
  const { isLoading } = props
  const classes = useStyles()
  const { paper, avatar, form, submit } = classes
  const [state, setState] = React.useState<IUserRequest>({
    username: 'Tony@stark.com',
    password: 'qwerqwer',
  })

  const getInputProps = (name: keyof IUserRequest) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setState({ ...state, [name]: event.target.value })
    return {
      value: state[name],
      handleChange,
      name,
      disabled: isLoading,
    }
  }

  const { handleSubmit, loading } = React.useContext(UserAuthContext)

  const controlledSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const preparedState = trimObject(state)
    handleSubmit(preparedState)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <AuthHeader theme={avatar} title="Aeon social network" Icon={LockOutlinedIcon} />
        <form className={form} onSubmit={controlledSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomInput {...getInputProps('username')} type="text" />
            </Grid>
            <Grid item xs={12}>
              <CustomInput {...getInputProps('password')} type="password" />
            </Grid>
          </Grid>
          <AccentButton
            title="Sign in"
            className={submit}
            isLoading={isLoading || loading}
          />
        </form>
      </div>
    </Container>
  )
}

export default Auth
