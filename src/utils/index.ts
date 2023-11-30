export const isNumber = (value: any): value is number => typeof value === 'number'
export const isString = (value: any): value is string => typeof value === 'string'
export const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
export const isObject = (value: any): value is object => typeof value === 'object'

export const sum = (numbers: number[]) => {
  return numbers.reduce((sum, num) => sum + num, 0)
}

export const unique = (arr: any[]) => {
  return [...new Set(arr)]
}

export const asc = <T extends number | string>(a: T, b: T): number => {
  if (isNumber(a) && isNumber(b)) {
    return a - b
  } else if (isString(a) && isString(b)) {
    return a.localeCompare(b)
  }
  throw new Error('Invalid argument types')
}

export const desc = <T extends number | string>(a: T, b: T): number => {
  if (isNumber(a) && isNumber(b)) {
    return b - a
  } else if (isString(a) && isString(b)) {
    return b.localeCompare(a)
  }
  throw new Error('Invalid argument types')
}

export const formatDay = (day: number | string) => {
  const parsedDay = Number(day)
  return String(parsedDay).padStart(2, '0')
}

export const validateDay = (day: number | string) => {
  const parsedDay = Number(day)
  return !day || Number.isNaN(parsedDay) || parsedDay < 1 || parsedDay > 31
}

export const genTemplate = (day: number) => `import { readInput } from 'io'

const input = await readInput('day-${formatDay(day)}')

console.log(input)

// TODO: crush it
`
