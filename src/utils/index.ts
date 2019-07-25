export interface ITrim {
  [key: string]: string
}

// FIXME: add typeguard for extends initialObject
// export function trimObject<T, K = T>(entity: T, initialObject: K = entity): K {
//   return Object.entries(entity).reduce<K>(
//     (acc, [key, value]) => ({ ...acc, [key]: value.trim() }),
//     initialObject,
//   )
// }
export function trimObject<T>(entity: T, initialObject: T = entity): T {
  return Object.entries(entity).reduce<T>(
    (acc, [key, value]) => ({ ...acc, [key]: value.trim() }),
    initialObject,
  )
}
