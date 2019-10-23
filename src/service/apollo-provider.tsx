import * as React from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import config from '../config'

const createHttpLink = (uri: string) => {
  return createHttpLink({ uri })
}

const createAuthLink = (token?: string) => {
  return setContext((_, { headers }: any) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))
}

const createClient = (uri, token?) => {
  return new ApolloClient({
    link: createAuthLink(token).concat(createHttpLink(uri)),
    cache: new InMemoryCache(),
  })
}

export const CustomApolloProvider: React.FC = ({ children }) => {
  const [uri, setUri] = React.useContext(config.guestGraphqlUri)
  const [token, setToken] = React.useContext('')

  const client = createClient(uri, token)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
