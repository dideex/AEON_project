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
  const [tab, setTab] = React.useState<number>(0)

  function handleChange(_: React.ChangeEvent<{}>, newValue: number) {
    setTab(newValue)
  }

  function handleChangeIndex(index: number) {
    setTab(index)
  }

  return (
    <>
      <CustomTabs
        tabs={['Info', 'Gallery', 'Friends']}
        value={tab}
        handleChange={handleChange}
      />
      <Paper className={classes.paper}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tab}
          onChangeIndex={handleChangeIndex}
        >
          {[InfoPanel, GalleryPanel, FriendsPanel].map((Cmp, i) => (
            <TabPanel key={i} value={tab} index={i} dir={theme.direction}>
              <Cmp />
            </TabPanel>
          ))}
        </SwipeableViews>
      </Paper>
    </>
  )
}

export default FullWidthTabs
