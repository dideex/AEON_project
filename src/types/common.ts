export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export interface IFile {
  src: string
  upload?: File
}
