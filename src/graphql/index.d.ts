declare module '*/me.graphql' {
  import { DocumentNode } from 'graphql'

  const Me: DocumentNode
  export { Me }
}

declare module '*/get_users.graphql' {
  import { DocumentNode } from 'graphql'

  const GetUsers: DocumentNode
  export { GetUsers }
}
