import * as React from 'react'

import { action } from '../mocks'
import { Provider as MyProvider, RootContext } from '../components/common'
import { TMyInfo } from '../types'
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
    me: TMyInfo | null
    action: typeof action
    loading: boolean
  }) => JSX.Element
}
interface TMyInfoData {
  me: TMyInfo
}
const GetMyInfo: React.FC<IGetMyInfo> = ({ children, isLoading }) => {
  // TODO: add my container strategy
  // const { loading, error, data } = useQuery<TMyInfoData>(Me)
  // if (error) console.log(error)
  // const me = data.me
  const { history } = useRouter()
  const response = React.useContext(RootContext).strategy.myProfileStrategy.getMyProfile()
  if (response === null) {
    history.push('/auth')
    return children({ me: null, action, loading: false })
  }
  return children({ me: response, action, loading: isLoading || false })
}
