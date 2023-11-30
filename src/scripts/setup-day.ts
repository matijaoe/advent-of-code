import { mkdirSync, writeFileSync } from 'node:fs'
import chalk from 'chalk'
import { formatDay, genTemplate, validateDay } from 'utils'

const setupDay = (day: number | string) => {
  if (validateDay(day)) {
    console.error(chalk.red('Please specify a day (e.g., \'bun run day 1\')'))
    return
  }

  const dir = `./src/day-${formatDay(day)}`

  try {
    mkdirSync(dir)
    writeFileSync(`${dir}/input.txt`, '')
    writeFileSync(`${dir}/index.ts`, genTemplate(Number(day)))
    console.log(chalk.green(`Day ${formatDay(day)} set up successfully!`))
  } catch (err: any) {
    console.error(chalk.red(err?.message ?? 'Failed to set up day'))
  }
}

const day = Bun.argv[2]
setupDay(day)
