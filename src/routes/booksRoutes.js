import express from 'express'
import BookController from '../controllers/booksController.js'

const router = express.Router()

router
  .get('/books', BookController.index)
  .get('/books/:id', BookController.show)
  .post('/books', BookController.create)
  .put('/books/:id', BookController.update)
  .delete('/books/:id', BookController.destroy)

export default router
