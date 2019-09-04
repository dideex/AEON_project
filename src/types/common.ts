export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export interface IFile {
  src: string
  upload?: File
}

export interface IAppConfig {
  tokenKey: string
  guestGraphqlUri: string
  userGraphqlUri: string
  guestGraphqlWS: string
  userGraphqlWS: string
}
