import * as React from 'react'
import { IUserPreview } from '../types'
import { InfoProvider } from '../components/common'

import { users } from '../mocks'
import { IInfoWidgetCtx } from '../components/common/context'

interface IGetInfo {
  children: (props: IInfoWidgetCtx) => JSX.Element
}
// FIXME: implement graphql
const GetInfo: React.FC<IGetInfo> = ({ children }) => {
  const meritalUsers = [users.quill, users.deadpool]
  const chatInvites = 3
  const friendInvites = 1
  return children({ users: meritalUsers, chatInvites, friendInvites })
}

interface IInfoWidget {
  children: React.ReactNode
  user?: IUserPreview[]
}

export const InfoWidgetContainer: React.FC<IInfoWidget> = ({ children }) => {
  return <GetInfo>{data => <InfoProvider value={data}>{children}</InfoProvider>}</GetInfo>
}
