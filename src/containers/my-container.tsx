import * as React from 'react'

import { action, me as mockedMe } from '../mocks'
import { Provider as MyProvider } from '../components/common'
import { TMyInfo } from '../types'
import { useQuery } from '@apollo/react-hooks'
import { Me } from '../graphql/me.graphql'

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
interface TMyInfoData {
  me: TMyInfo
}
const GetMyInfo: React.FC<IGetMyInfo> = ({ children, isLoading }) => {
  // const loading = Boolean(isLoading)
  const { loading, error, data } = useQuery<TMyInfoData>(Me)
  console.log('TCL: data', data)
  if (error) console.log(error)
  const me = data ? data.me : mockedMe
  return children({ me, action, loading })
}
