import { useQuery } from '@apollo/react-hooks'

import { IProfileStrategy } from '../../types'
import { Me } from '*/me.graphql'

export const profileStrategy = (): IProfileStrategy => ({
  getMyProfile: () => {
    const { loading, data: myData } = useQuery(Me)
    const data = myData ? myData.me : null
    return {
      data,
      loading,
    }
  },
})
