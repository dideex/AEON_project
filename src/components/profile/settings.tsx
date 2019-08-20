import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles } from '@material-ui/styles'
import { Theme, Paper, useTheme } from '@material-ui/core'

import { SettingsForm, ChangeAvatar, ChangeNotifications } from './settings-tabs'
import { CustomTabs, TabPanel } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(2),
  },
}))

const Settings: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [tab, setTab] = React.useState<number>(2)

  function handleChange(_: React.ChangeEvent<{}>, newValue: number) {
    setTab(newValue)
  }

  function handleChangeIndex(index: number) {
    setTab(index)
  }
  return (
    <>
      <CustomTabs
        tabs={['Info', 'Avatar', 'Notifications']}
        value={tab}
        handleChange={handleChange}
      />
      <Paper className={classes.paper}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tab}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={tab} index={0} dir={theme.direction}>
            <SettingsForm />
          </TabPanel>
          <TabPanel value={tab} index={1} dir={theme.direction}>
            <ChangeAvatar />
          </TabPanel>
          <TabPanel value={tab} index={2} dir={theme.direction}>
            <ChangeNotifications />
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </>
  )
}

export default Settings
