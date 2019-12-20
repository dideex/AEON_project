import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { makeStyles, Theme, InputBase } from '@material-ui/core'

import { Search as SearchIcon } from '@material-ui/icons'
import { fade } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    color: theme.palette.text.secondary,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles()
  const [query, setQuery] = React.useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      history.push(`/search/${query}`)
      setQuery('')
    }
  }
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        color="secondary"
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
      />
    </div>
  )
}

export default withRouter(Search)
