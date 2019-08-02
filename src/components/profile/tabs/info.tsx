import * as React from 'react'
import { Grid, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context } from '../../common'
import { parseDate } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: `${theme.spacing(1)}px 0`,
  },
}))

const InfoPanel: React.FC = () => {
  const classes = useStyles()
  const { me } = React.useContext(Context)
  const { firstname, lastname, patronymic, city, gender, registered, isOnline, id } = me
  
  const firstAndLastName = `${firstname} ${lastname}`
  const fullname = patronymic
    ? `${firstAndLastName} ${patronymic}`
    : `${firstAndLastName}`

  const fields = {
    'ID:': id,
    'Full name:': fullname,
    'City:': city,
    'Gender:': gender,
    // TODO: add common format
    'Is online:': isOnline ? 'online' : 'offline',
    'Registered:': parseDate(registered),
  }
  return (
    <Grid container>
      {Object.entries(fields).map(([label, value], i) => (
        <React.Fragment key={i}>
          <Grid className={classes.grid} item xs={5} sm={3}>
            <Typography className={classes.label} variant="subtitle1">
              {label}
            </Typography>
          </Grid>
          <Grid className={classes.grid} item xs={7} sm={9}>
            {value}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default InfoPanel
