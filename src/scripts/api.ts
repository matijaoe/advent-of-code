import { isOk } from 'utils'

const headers = {
  Cookie: `session=${Bun.env.SESSION}`
}

export const fetchInput = ({ day, year }: { day: number; year?: number }) => {
  if (!year) {
    year = new Date().getFullYear()
  }
  const url = `https://adventofcode.com/${year}/day/${day}/input`
  return fetch(url, {
    headers
  })
    .then(isOk)
    .then((response) => response.text())
}
