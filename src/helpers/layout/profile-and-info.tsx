import * as React from 'react'
import { Grid } from '@material-ui/core'

import { ProfileWidget, InfoWidget } from '../../components/widget'
// import { InfoWidgetContainer } from '../containers'

const ProfileAndInfo: React.FC = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <ProfileWidget />
        </Grid>
        <Grid item xs={12} sm={6}>
          {children}
        </Grid>
        <Grid item xs={12} sm={3}>
          <InfoWidget />
        </Grid>
      </Grid>
    </>
  )
}

export default ProfileAndInfo
