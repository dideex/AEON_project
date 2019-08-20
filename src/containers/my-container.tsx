import * as React from 'react'

import { me, action } from '../mocks'
import { Provider as MyProvider } from '../components/common'
import { TMyInfo } from '../types'

interface IMyContainer {
  id: string
  children: React.ReactNode
}

export const MyContainer: React.FC<IMyContainer> = ({ id, children }) => {
  return (
    <GetMyInfo id={id}>
      {({ me, action }) => <MyProvider value={{ me, action }}>{children}</MyProvider>}
    </GetMyInfo>
  )
}

// FIXME: add graphql resolver
interface IGetMyInfo {
  id: string
  children: (props: { me: TMyInfo; action: typeof action }) => JSX.Element
}
const GetMyInfo: React.FC<IGetMyInfo> = ({ children }) => {
  return children({ me, action })
}
