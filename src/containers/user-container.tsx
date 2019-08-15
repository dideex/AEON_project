import * as React from 'react'
import { UserCtxProvider } from '../components/common'
import { IUserPreview } from '../types'
import { users } from '../mocks'
import { THandleAction } from '../components/common/context'
import { useRouter } from '../service'

interface IUserContainer {
  children: React.ReactNode
  userId: string
  handleInviteToChat?: THandleAction
  handleRemoveFromFriends?: THandleAction
  handleAddToMute?: THandleAction
}

const noOp = () => () => {}

export const UserContainer: React.FC<IUserContainer> = props => {
  const { userId, children, ...actions } = props
  const {
    handleInviteToChat = noOp,
    handleRemoveFromFriends = noOp,
    handleAddToMute = noOp,
  } = actions
  const { history } = useRouter()

  const action = {
    handleOpenChat: (id: string) => () => history.push(`/chat/${id}`),
    handleInviteToChat,
    handleRemoveFromFriends,
    handleAddToMute,
  }
  return (
    <GetUser id={userId}>
      {({ user }) => (
        <UserCtxProvider value={{ user, action }}>{children}</UserCtxProvider>
      )}
    </GetUser>
  )
}

// stub function
interface IGetUser {
  id: string
  children: (props: { user: IUserPreview }) => JSX.Element
}
const GetUser: React.FC<IGetUser> = ({ id, children }) => {
  const user =
    Object.values(users).find((user: IUserPreview) => user.id === id) ||
    ({} as IUserPreview)
  return children({ user })
}
