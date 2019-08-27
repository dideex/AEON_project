import * as React from 'react'
import { UserGridProvider } from '../components/common'
import { IUserPreview } from '../types'
import { users } from '../mocks'

interface IUserGridContainer {
  children: React.ReactNode
}

export const UserGridContainer: React.FC<IUserGridContainer> = props => {
  const { children } = props

  return (
    <GetUsers>
      {({ users, loading }) => (
        <UserGridProvider value={{ users, loading }}>{children}</UserGridProvider>
      )}
    </GetUsers>
  )
}

//TODO: implement graphql
interface IGetUsers {
  children: (props: { users: IUserPreview[]; loading: boolean }) => JSX.Element
}
const GetUsers: React.FC<IGetUsers> = ({ children }) => {
  const loading = false
  return children({ users: Object.values(users), loading })
}
