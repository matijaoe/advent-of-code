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

export const isBetween = (x: number, [min, max]: [number, number]) => {
  return x >= min && x <= max
}

export const formatDay = (day: number | string) => {
  const parsedDay = Number(day)
  return String(parsedDay).padStart(2, '0')
}

export const formatDayName = (day: number | string) => {
  return `day-${formatDay(day)}`
}

export const validateDay = (day: number | string) => {
  const parsedDay = Number(day)
  return day && !Number.isNaN(parsedDay) && isBetween(parsedDay, [1, 25])
}

export const generateTemplate = (day: number) => `import { parseLines, readInput } from 'io'

const input = await readInput('${formatDayName(day)}')

export const part1 = () => {
  const lines = parseLines(input)
  // your code goes here
  return lines.length
}
`

export const withPerformance = <T>(handler: () => T) => {
  const start = performance.now()
  const result = handler()
  const end = performance.now()

  return [result, end - start] as const
}

export const formatPerformance = (time: number) => {
  const round = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100
  if (time < 1) {
    return `${round(time * 1000)} µs`
  }
  return `${round(time)} ms`
}

export const isOk = (response: Response): Promise<Response> => {
  return new Promise((resolve, reject) =>
    response.ok ? resolve(response) : reject(response)
  )
}
