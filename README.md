# Advent of Code 2023

- **Bun & TypeScript**, with ESLint
- Automatic day setup, with all the necessary files and puzzle input
- Performance metrics

Install dependencies:
```bash
# ensure bun is installed:
# curl -fsSL https://bun.sh/install | bash

bun install
```

Set up a new day:
```bash
bun setup 1
```

Run day solutions:
```bash
bun day 1
```

For automatic puzzle input retrieval, define `.env` file with `session` cookie from [adventofcode.com](https://adventofcode.com)
```env
SESSION=
YEAR=2023
```

Expected `index.ts` structure
```ts
import { parseGroups, parseLines, readInput } from 'io'

const input = await readInput('day-01')

export const part1 = () => {
  const lines = parseLines(input)
  // your code goes here
  return lines.length
}

export const part2 = () => {
  const lines = parseGroups(input)
  // your code goes here
  return lines.length
}
```

`bun day <day-num>` output
```
🌲 Part One: 1999 (568.63 µs)
🎄 Part Two: 255 (284.21 µs)
```


## Days
✅ / ❌

| Day | Part 1 | Part 2 | Solution                      |
| --- | ------ | ------ | ----------------------------- |
| 01  |        |        | [Link](./src/day-01/index.ts) |
| 02  |        |        |                               |
| 03  |        |        |                               |
| 04  |        |        |                               |
| 05  |        |        |                               |
| 06  |        |        |                               |
| 07  |        |        |                               |
| 08  |        |        |                               |
| 09  |        |        |                               |
| 10  |        |        |                               |
| 11  |        |        |                               |
| 12  |        |        |                               |
| 13  |        |        |                               |
| 14  |        |        |                               |
| 15  |        |        |                               |
| 16  |        |        |                               |
| 17  |        |        |                               |
| 18  |        |        |                               |
| 19  |        |        |                               |
| 20  |        |        |                               |
| 21  |        |        |                               |
| 22  |        |        |                               |
| 23  |        |        |                               |
| 24  |        |        |                               |
| 25  |        |        |                               |
| 26  |        |        |                               |
| 27  |        |        |                               |
| 28  |        |        |                               |
| 29  |        |        |                               |
| 30  |        |        |                               |
| 31  |        |        |                               |
