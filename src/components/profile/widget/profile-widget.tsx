import * as React from 'react'
import { Context } from '../../common'

const ProfileWidget: React.FC = () => {
  const { me } = React.useContext(Context)
  return (
    <div>
      <img src={me.avatar} />
      {me.firstname}
    </div>
  )
}

export default ProfileWidget
