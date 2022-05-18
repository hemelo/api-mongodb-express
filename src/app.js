import express from 'express'
import booksSeeder from './models/seeder/booksSeeder.js'
import database from './config/database.js'
import chalk from 'chalk'
import routes from './routes/index.js'

database.on('error', () => {
  console.error(chalk.red('Database connection error. Please check your connection string or authorization data'))
  process.exit(1)
})

database.once('open', console.log.bind(console, chalk.green('Database connected with success on Mongo Db')))
booksSeeder()

const app = express()
app.use(express.json())
routes(app)

export default app
