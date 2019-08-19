import * as React from 'react'
import { Grid, Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Context } from '../../common'
import { parseDate, getFullName } from '../../../utils'

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: theme.color.fontSecondary,
  },
  grid: {
    padding: theme.spacing(1, 0),
  },
}))

const InfoPanel: React.FC = () => {
  const classes = useStyles()
  const { me } = React.useContext(Context)
  const {
    firstname,
    lastname,
    username,
    patronymic,
    city,
    gender,
    registered,
    isOnline,
    id,
    age,
  } = me

  const fields = {
    left: {
      'ID:': id,
      'Email:': username,
      'Full name:': getFullName(firstname, lastname, patronymic),
      'City:': city,
    },
    right: {
      'Age:': age,
      'Gender:': gender,
      'Is online:': isOnline ? 'online' : 'offline',
      'Registered:': parseDate(registered),
    },
  }
  const getColumn = (rows: typeof fields.left | typeof fields.right) => (
    <Grid container>
      {Object.entries(rows).map(([label, value], i) => (
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
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        {getColumn(fields.left)}
      </Grid>
      <Grid item xs={12} sm={6}>
        {getColumn(fields.right)}
      </Grid>
    </Grid>
  )
}

export default InfoPanel
