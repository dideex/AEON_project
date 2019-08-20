import * as React from 'react'
import { makeStyles, Theme, Grid, Switch, FormControlLabel } from '@material-ui/core'

import { Context, CustomSelect } from '../../common'
import { IUserPolicy } from '../../../types'

const useStyles = makeStyles((theme: Theme) => ({
  root: { padding: theme.spacing(0) },
}))

const Notifications: React.FC = () => {
  const classes = useStyles()
  const initialPolicy: IUserPolicy = {
    profile: 'pulbic',
    message: 'pulbic',
    notifyFriendRequest: false,
    notifyPhotoRating: false,
    notifyNewPosts: false,
  }
  const { policy = initialPolicy } = React.useContext(Context).me
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

  // console.log(' LOG ___ state ', state)

  return (
    <>
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomSelect
            name="profile"
            handleChange={handleSelectChange}
            options={['private', 'public']}
            value={state.profile}
          />
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
      </Grid>
    </>
  )
}

export default Notifications
