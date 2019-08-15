import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

import { InfoPanel, GalleryPanel, FriendsPanel } from '../tabs'
import { CustomTabs, TabPanel } from '../../common'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(4),
    },
  }),
)

const FullWidthTabs: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState<number>(0)

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  function handleChangeIndex(index: number) {
    setValue(index)
  }

  return (
    <>
      <CustomTabs
        tabs={['Info', 'Gallery', 'Friends']}
        value={value}
        handleChange={handleChange}
      />
      <Paper className={classes.paper}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {[InfoPanel, GalleryPanel, FriendsPanel].map((Cmp, i) => (
            <TabPanel key={i} value={value} index={i} dir={theme.direction}>
              <Cmp />
            </TabPanel>
          ))}
        </SwipeableViews>
      </Paper>
    </>
  )
}

export default FullWidthTabs
