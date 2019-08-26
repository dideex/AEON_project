import * as React from 'react'
import { IUserPreview } from '../../types'
import { Loading } from '../common'

export interface ISearch {
  users: IUserPreview[]
  loading?: boolean
}

const Search: React.FC<ISearch> = ({ users, loading = false }) => {
  if (loading) return <Loading />
  return <div> Search title </div>
}

export default Search
