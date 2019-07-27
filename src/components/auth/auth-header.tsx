import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

interface IAuthHeader {
  theme: string
  title: string
  Icon: React.ComponentType
}

const AuthHeader: React.FC<IAuthHeader> = ({ theme, title, Icon }) => (
  <>
    <Avatar className={theme}>
      <Icon />
    </Avatar>
    <Typography component="h1" variant="h5">
      {title}
    </Typography>
  </>
)
export default AuthHeader
