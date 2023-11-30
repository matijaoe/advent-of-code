import { parseLines, readInput } from 'io'

const input = await readInput('day-01')

export const part1 = () => {
  const lines = parseLines(input)
  // your code goes here
  return lines.length
}
