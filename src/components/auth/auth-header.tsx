import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/Face'
import Typography from '@material-ui/core/Typography'

interface IAuthHeader {
  theme: string
  title: string
}

const AuthHeader: React.FC<IAuthHeader> = ({ theme, title }) => (
  <>
    <Avatar className={theme}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      {title}
    </Typography>
  </>
)
export default AuthHeader
