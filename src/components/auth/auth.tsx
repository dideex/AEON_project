import * as React from 'react'
import { makeStyles, Theme, Container, CssBaseline } from '@material-ui/core'

import { IUserRequest } from '../../types'
import { CustomInput, AccentButton } from '../common'
import AuthHeader from './auth-header'

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
    backgroundColor: theme.color.subAccent,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    position: 'relative',
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.color.subAccent,
  },
}))

interface CompProps {
  handleSubmit: (data: IUserRequest) => void
  isLoading: boolean
}

const Auth: React.FC<CompProps> = props => {
  const { isLoading } = props
  const classes = useStyles()
  const { paper, avatar, form, submit } = classes
  const [state, setState] = React.useState<IUserRequest>({ username: '', password: '' })

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

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.handleSubmit(state)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={paper}>
        <AuthHeader theme={avatar} title="Aeon social network" />
        <form className={form} onSubmit={handleSubmit}>
          <CustomInput {...getInputProps('username')} type="text" />
          <CustomInput {...getInputProps('password')} type="password" />
          <AccentButton title="Sign in" className={submit} isLoading={isLoading} />
        </form>
      </div>
    </Container>
  )
}

export default Auth
