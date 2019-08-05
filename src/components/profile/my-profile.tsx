import * as React from 'react'
import { Grid } from '@material-ui/core'

import { ProfileWidget, ProfileTabs } from './widget'

const Profile: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <ProfileWidget />
      </Grid>
      <Grid item xs={12} sm={9}>
        <ProfileTabs />
      </Grid>
    </Grid>
  )
}

export default Profile
