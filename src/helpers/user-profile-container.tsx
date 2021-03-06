import * as React from 'react'
import { UserProfileProvider, Context } from '../components/common'
import { IUserProfileInfo } from '../types'
import { fakeDeadpool } from '../mocks'

interface IUserProfileContainer {
  children: React.ReactNode
  userId: string
}

export const UserProfileContainer: React.FC<IUserProfileContainer> = props => {
  const { userId, children } = props
  const { me } = React.useContext(Context)
  if (!me) return null

  if (me.id === userId) {
    return <UserProfileProvider value={{ ...me }}>{children}</UserProfileProvider>
  }
  return (
    <GetUser id={userId}>
      {({ user }) => (
        <UserProfileProvider value={{ ...user }}>{children}</UserProfileProvider>
      )}
    </GetUser>
  )
}

//TODO: implement graphql
interface IGetUser {
  id: string
  children: (props: { user: IUserProfileInfo }) => JSX.Element
}
const GetUser: React.FC<IGetUser> = ({ children }) => {
  const user = fakeDeadpool
  return children({ user })
}
