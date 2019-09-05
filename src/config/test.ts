import { IAppConfig } from '../types'

export default {
  tokenKey: 'aeon.test_token',
  guestGraphqlUri: 'http://localhost:4000/graphql',
  userGraphqlUri: 'http://localhost:4000/user/graphql',
  guestGraphqlWS: 'http://localhost:4000/guest/websocket',
  userGraphqlWS: 'http://localhost:4000/user/websocket',
} as IAppConfig
