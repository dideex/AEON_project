import { IAppConfig } from '../types'

export default {
  tokenKey: 'aeon.test_token',
  guestGraphqlUri: 'localhost:4000/graphql',
  userGraphqlUri: 'localhost:4000/user/graphql',
  guestGraphqlWS: 'localhost:4000/guest/websocket',
  userGraphqlWS: 'localhost:4000/user/websocket',
} as IAppConfig
