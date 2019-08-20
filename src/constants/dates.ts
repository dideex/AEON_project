// import { IParsedDate, IUserPolicy } from '../types'

const fillDays = (_: any, i: number) => i + 1
const day29 = Array.from({ length: 29 }, fillDays)
const day30 = Array.from({ length: 30 }, fillDays)
const day31 = Array.from({ length: 31 }, fillDays)

export enum month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const months: month[] = [
  month.January,
  month.February,
  month.March,
  month.April,
  month.May,
  month.June,
  month.July,
  month.August,
  month.September,
  month.October,
  month.November,
  month.December,
]
export const days: { [key: number]: number[] } = {
  [month.January]: day31,
  [month.February]: day29,
  [month.March]: day31,
  [month.April]: day30,
  [month.May]: day31,
  [month.June]: day30,
  [month.July]: day31,
  [month.August]: day31,
  [month.September]: day30,
  [month.October]: day31,
  [month.November]: day30,
  [month.December]: day31,
}
export const years: number[] = (() => {
  const fromYear = new Date().getFullYear() - 18
  return Array.from({ length: 80 }, (_, i) => fromYear - i)
})()

export const birthdatePlaceholders: {
  [key: string]: string
  // TODO: try to infer right type
  // [key in keyof (IParsedDate | IUserPolicy)]: string
} = {
  month: 'Birth month',
  year: 'Birth year',
  day: 'Birth day',
  profile: 'Profile policy',
  message: 'Message policy',
}
