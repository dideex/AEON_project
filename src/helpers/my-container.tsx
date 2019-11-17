import * as React from 'react'

import { me, action } from '../mocks'
import { Provider as MyProvider } from '../components/common'
import { TMyInfo } from '../types'

interface IMyContainer {
  isLoading?: boolean
  children: React.ReactNode
}

export const MyContainer: React.FC<IMyContainer> = ({ children, isLoading }) => {
  return (
    <GetMyInfo isLoading={isLoading}>
      {({ me, action, loading }) => (
        <MyProvider value={{ me, action, loading }}>{children}</MyProvider>
      )}
    </GetMyInfo>
  )
}

// FIXME: add graphql resolver
interface IGetMyInfo {
  isLoading?: boolean
  children: (props: {
    me: TMyInfo
    action: typeof action
    loading: boolean
  }) => JSX.Element
}
const GetMyInfo: React.FC<IGetMyInfo> = ({ children, isLoading }) => {
  const loading = Boolean(isLoading)
  return children({ me, action, loading })
}
