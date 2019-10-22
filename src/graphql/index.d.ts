declare module '*/me.graphql' {
  import { DocumentNode } from 'graphql'

  const Me: DocumentNode
  export { Me }
}

declare module '*/users.graphql' {
  import { DocumentNode } from 'graphql'

  const User: DocumentNode
  export { User }
}

declare module '*/token.graphql' {
  import { DocumentNode } from 'graphql'

  const Token: DocumentNode
  export { Token }
}
