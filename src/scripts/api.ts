import { isOk } from 'utils'

const headers = {
  Cookie: `session=${Bun.env.SESSION}`
}

export const fetchInput = ({ day, year }: { day: number; year?: number }) => {
  if (!year) {
    year = new Date().getFullYear()
  }
  return fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers
  })
    .then(isOk)
    .then((response) => response.text())
}
