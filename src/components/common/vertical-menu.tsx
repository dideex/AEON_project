import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { callAll } from '../../utils'

const useStyles = makeStyles(() => ({
  menu: {
    marginLeft: 'auto',
  },
}))

export interface IVerticalMenu {
  options: { label: string; onClick: (event: React.MouseEvent<HTMLElement>) => void }[]
}

const VerticalMenu: React.FC<IVerticalMenu> = ({ options }) => {
  const classes = useStyles()
  const ITEM_HEIGHT = 48
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  return (
    <div className={classes.menu}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 250,
          },
        }}
      >
        {options.map(({ label, onClick }) => (
          <MenuItem
            key={label}
            selected={label === 'Pyxis'}
            onClick={callAll(onClick, handleClose)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default VerticalMenu
