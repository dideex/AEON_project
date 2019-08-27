import * as React from 'react'
import { Grid } from '@material-ui/core'

import { InfoWidget } from '../components/widget'
import { InfoWidgetContainer } from '../containers'

const InfoLayout: React.FC = ({ children }) => {
  return (
    <InfoWidgetContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          {children}
        </Grid>
        <Grid item xs={12} sm={3}>
          <InfoWidget />
        </Grid>
      </Grid>
    </InfoWidgetContainer>
  )
}

export default InfoLayout
