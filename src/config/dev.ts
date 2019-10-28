import { IAppConfig } from '../types'

export default {
  tokenKey: 'aeon.token',
  guestGraphqlUri: 'http://localhost:5000/graphql',
  userGraphqlUri: 'http://localhost:5000/user/graphql',
  guestGraphqlWS: 'http://localhost:5000/guest/websocket',
  userGraphqlWS: 'http://localhost:5000/user/websocket',
} as IAppConfig
