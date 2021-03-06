import emailValidator from 'email-validator'

// Add locale-specific relative date/time formatting rules.
import { IUserInputFields } from '../components/auth/register'
import { parseDateAgo } from './parseDate'

export interface ITrim {
  [key: string]: string
}

// FIXME: add typeguard for extends initialObject
// export function trimObject<T, K extends T = T>(entity: T, initialObject: K = entity): K {
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

export function validator(name: keyof IUserInputFields, field: string) {
  switch (name) {
    case 'username':
      return !emailValidator.validate(field)
    case 'lastname':
      return field.length < 3
    case 'firstname':
      return field.length < 3
    case 'password':
      return field.length < 6
    default:
      return false
  }
}

export function parseDate(date: string): string {
  return new Date(Number(date)).toLocaleDateString()
}

export function parseTime(date: string): string {
  const messageDate = new Date(Number(date))
  const now = new Date()
  if (messageDate.getDate() === now.getDate()) {
    return parseDateAgo(date)
  } else {
    return parseDate(date)
  }
}

export function getFullName<T>(first: T, last: T, patronymic?: T): string {
  return patronymic ? `${first} ${patronymic} ${last}` : `${first} ${last}`
}

export const callAll = (...fns: any[]) => (...args: any[]) =>
  fns.forEach(fn => fn && fn(...args))

export const minsFromNow = (min: number): string => {
  const now = new Date()
  return now.setMinutes(now.getMinutes() - min).toString()
}

export * from './components'
