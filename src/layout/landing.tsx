import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { Landing } from '../components/landing'
// import { GetUsers } from '../graphql/get_users.graphql'
import { Me } from '../graphql/me.graphql'

const Main: React.FC = () => {
  const { loading, error, data } = useQuery(Me)
  console.log('TCL: Main:React.FC -> data', data)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{`Error! ${error.message}`}</div>
  return <Landing />
}

export default Main
