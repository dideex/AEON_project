import * as React from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink as httpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import config from '../config'

const createHttpLink = (uri: string) => {
  return httpLink({ uri })
}

const createAuthLink = (token?: string) => {
  return setContext((_, { headers }: any) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }))
}

const createClient = (uri: string, token?: string) => {
  return new ApolloClient({
    link: createAuthLink(token).concat(createHttpLink(uri)),
    cache: new InMemoryCache(),
  })
}

// TODO: create client context provider
export const CustomApolloProvider: React.FC = ({ children }) => {
  const [uri, setUri] = React.useState(config.guestGraphqlUri)
  const [token, setToken] = React.useState('')

  const client = createClient(uri, token)
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
