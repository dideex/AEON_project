import * as React from 'react'
import { Tab, Tabs, createStyles, Theme, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface ITabs {
  value: number
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void
  tabs: string[]
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
      borderRadius: theme.shape.borderRadius,
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

const CustomTabs: React.FC<ITabs> = ({ value, handleChange, tabs }) => {
  const classes = useStyles()
  const { selected, wrapper, root } = classes
  return (
    <Tabs
      className={classes.tabs}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      aria-label="full width tabs example"
    >
      {tabs.map((tab, i) => (
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
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: any
  value: any
}

export function TabPanel(props: TabPanelProps) {
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

export default CustomTabs
