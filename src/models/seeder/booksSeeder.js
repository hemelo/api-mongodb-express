import Book from '../book.js'
import seedBooks from './books.js'
import chalk from 'chalk'

const seedDB = async () => {
  try {
    await Book.insertMany(seedBooks)
  } catch (err) {
    chalk.red('Error on seeding database.')
  }
}

export default seedDB
