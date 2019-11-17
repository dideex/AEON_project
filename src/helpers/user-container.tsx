import * as React from 'react'
import { UserCtxProvider } from '../components/common'
import { IUserPreview } from '../types'
import { users } from '../mocks'
import { THandleAction } from '../components/common/context'
import { useRouter } from '../service'

interface IUserContainer {
  children: React.ReactNode
  userId: string
  isLoading?: boolean
  handleInviteToChat?: THandleAction
  handleRemoveFromFriends?: THandleAction
  handleAddToMute?: THandleAction
}

const noOp = () => () => {}

export const UserContainer: React.FC<IUserContainer> = props => {
  const { userId, children, isLoading, ...actions } = props
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
    <GetUser id={userId} isLoading={isLoading}>
      {({ user, loading }) => (
        <UserCtxProvider value={{ user, action, loading }}>{children}</UserCtxProvider>
      )}
    </GetUser>
  )
}

// stub function
interface IGetUser {
  id: string
  isLoading?: boolean
  children: (props: { user: IUserPreview; loading: boolean }) => JSX.Element
}
const GetUser: React.FC<IGetUser> = ({ id, children, isLoading }) => {
  const loading = Boolean(isLoading)
  const user =
    Object.values(users).find((user: IUserPreview) => user.id === id) ||
    ({} as IUserPreview)
  return children({ user, loading })
}
