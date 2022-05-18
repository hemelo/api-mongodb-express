import mongoose from 'mongoose'
import chalk from 'chalk'
import 'dotenv/config'

if (process.env.DATABASE_CONNECTION == undefined) {
  console.log(chalk.red('You must define a DATABASE_CONNECTION on .env file.'))
  process.exit(1)
}

mongoose.connect(process.env.DATABASE_CONNECTION)
mongoose.set('debug', process.env.DATABASE_DEBUG || false)

const database = mongoose.connection

export default database
