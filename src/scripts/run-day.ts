import process from 'node:process'
import chalk from 'chalk'
import { formatDay, validateDay } from 'utils'

const runDay = (day: string | number) => {
  if (validateDay(day)) {
    console.error(chalk.red('Please specify a day (e.g., \'bun run day 1\')'))
    process.exit()
  }

  const command = `./src/day-${formatDay(day)}/index.ts`

  try {
    Bun.spawn(['bun', command], {
      stdout: 'inherit',
      onExit: (code) => {
        if (code.exitCode !== 0) {
          console.error(chalk.red(`Day ${day} exited with code ${code.exitCode}`))
          process.exit()
        }
      }
    })
    console.log(chalk.yellow.bold(`Running day ${day}:`))
  } catch (error: any) {
    console.error(chalk.red(error?.message ?? 'Failed to run day'))
    process.exit()
  }
}

const day = Bun.argv[2]
runDay(day)
