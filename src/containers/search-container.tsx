import * as React from 'react'
import { UserGridProvider } from '../components/common'
import { IUserPreview } from '../types'
import { users } from '../mocks'

interface IUserProfileContainer {
  children: React.ReactNode
  userId: string
}

export const UserProfileContainer: React.FC<IUserProfileContainer> = props => {
  const { userId, children } = props

  return (
    <GetUsers id={userId}>
      {({ users, loading }) => (
        <UserGridProvider value={{ users, loading }}>{children}</UserGridProvider>
      )}
    </GetUsers>
  )
}

//TODO: implement graphql
interface IGetUsers {
  id: string
  children: (props: { users: IUserPreview[]; loading: boolean }) => JSX.Element
}
const GetUsers: React.FC<IGetUsers> = ({ children }) => {
  const loading = false
  return children({ users: Object.values(users), loading })
}
