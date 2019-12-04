import { useQuery } from '@apollo/react-hooks'

import { IProfileStrategy } from '../../types'
import { Me } from '*/me.graphql'

export const profileStrategy = (): IProfileStrategy => ({
  getMyProfile: () => {
    const { loading, data } = useQuery(Me)
    const response = data ? data.me : null
    return {
      response,
      loading,
    }
  },
})
