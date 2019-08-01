import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles'
import { Paper, Tab, Typography, Box, Tabs } from '@material-ui/core'

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...rest } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...rest}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tab: {
      color: 'white',
      backgroundColor: theme.color.accent,
    },
    selected: {
      color: theme.color.accent,
      backgroundColor: 'white',
    },
    wrapper: {
      padding: theme.spacing(1),
    },
    root: {
      borderRadius: theme.settings.borderRadius,
      margin: theme.spacing(1),
    },
    tabs: {
      margin: `0 -${theme.spacing(1)}px`,
    },
    paper: {
      marginTop: theme.spacing(4),
    },
  }),
)

export default function FullWidthTabs() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState<number>(0)

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  function handleChangeIndex(index: number) {
    setValue(index)
  }

  const { selected, wrapper, root } = classes

  return (
    <>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {['Info', 'Gallery', 'Friends'].map((tab, i) => (
          <Tab
            classes={{ selected, wrapper, root }}
            className={classes.tab}
            label={tab}
            key={i}
            wrapped
            {...a11yProps(i)}
          />
        ))}
      </Tabs>
      <Paper className={classes.paper}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Paper>
    </>
  )
}
