import * as React from 'react'
import {
  makeStyles,
  Theme,
  Grid,
  Switch,
  FormControlLabel,
  Typography,
} from '@material-ui/core'

import { Context, CustomSelect, AccentButton } from '../../common'
import { IUserPolicy } from '../../../types'

const useStyles = makeStyles((theme: Theme) => ({
  marginTop: {
    paddingTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Notifications: React.FC = () => {
  const classes = useStyles()
  const initialPolicy: IUserPolicy = {
    profile: 'public',
    message: 'public',
    notifyFriendRequest: false,
    notifyPhotoRating: false,
    notifyNewPosts: false,
  }
  const { policy = initialPolicy } = React.useContext(Context).me
  const { handleUserPolicy } = React.useContext(Context).action
  const [state, setState] = React.useState<IUserPolicy>(policy)
  const handleChange = (name: keyof IUserPolicy) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setState({ ...state, [name]: event.target.checked })
  }

  const getSwitch = (name: keyof IUserPolicy) => (
    <Switch
      checked={Boolean(state[name])}
      onChange={handleChange(name)}
      value={name}
      color="primary"
    />
  )

  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
  ) => {
    setState(oldValues => ({
      ...oldValues,
      [event.target.name as keyof IUserPolicy]: event.target.value,
    }))
  }
  const policyOptions = [
    { value: 'private', key: 'Only friends' },
    { value: 'public', key: 'Everyone' },
  ]
  const handleSubmit = () => {
    handleUserPolicy(state)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Typography gutterBottom variant="h5">
          Profile privacy:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomSelect
          name="profile"
          handleChange={handleSelectChange}
          options={policyOptions}
          value={state.profile}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomSelect
          name="message"
          handleChange={handleSelectChange}
          options={policyOptions}
          value={state.message}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.marginTop} gutterBottom variant="h5">
          Notification&apos;s policy:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControlLabel
          control={getSwitch('notifyFriendRequest')}
          label="Allow friend request notification"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControlLabel
          control={getSwitch('notifyNewPosts')}
          label="Allow new post notification"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControlLabel
          control={getSwitch('notifyPhotoRating')}
          label="Allow new photo likes notification"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <AccentButton onClick={handleSubmit} title="Save" className={classes.submit} />
      </Grid>
    </Grid>
  )
}

export default Notifications
