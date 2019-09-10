declare module '*/me.graphql' {
  import { DocumentNode } from 'graphql'

  const MeQuery: DocumentNode
  export { MeQuery }
}

declare module '*/get_users.graphql' {
  import { DocumentNode } from 'graphql'

  const GetUsers: DocumentNode
  export { GetUsers }
}
