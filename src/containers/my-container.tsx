import * as React from 'react'

import { action, me as mockedMe } from '../mocks'
import { Provider as MyProvider, RootContext } from '../components/common'
import { TMyInfo } from '../types'
import { useQuery } from '@apollo/react-hooks'
import { Me } from '../graphql/me.graphql'
import { useRouter } from '../service'

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
  // TODO: add my container strategy
  const { loading, error, data } = useQuery<TMyInfoData>(Me)
  // if (error) console.log(error)
  // const { history } = useRouter()
  // if (!data || !data.me) {
  //   history.push('/auth')
  //   return null
  // }
  // const me = data.me
  const response = React.useContext(RootContext).strategy.myProfileStrategy.getMyProfile()
  if (response === null) {
    return children({ me: {}, action, loading })
  }
  return children({ me, action, loading })
}
