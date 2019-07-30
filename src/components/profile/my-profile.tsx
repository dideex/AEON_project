import * as React from 'react'
import { Grid } from '@material-ui/core'

import { ProfileWidget } from './widget'

interface CompProps {}

const Profile: React.FC<CompProps> = props => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <ProfileWidget />
      </Grid>
      <Grid item xs={12} sm={9}>
        <div>Tabs</div>
      </Grid>
    </Grid>
  )
}

export default Profile
