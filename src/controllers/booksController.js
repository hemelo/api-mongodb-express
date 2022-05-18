import Book from '../models/book.js'

class BookController {
  static index = (req, res) => {
    if (req.query.id == undefined) {
      Book.find((_err, books) => res.status(200).json(books))
    } else {
      res.redirect(`/books/${req.query.id}`)
    }
  }

  static show = (req, res) => {
    const id = req.params.id

    Book.findById(id, (err, books) => {
      if (err) {
        res.status(400).send({ message: 'Could not find by the id.' })
      } else {
        res.status(200).send(books)
      }
    })
  }

  static create = (req, res) => {
    const livro = Book.create(req.body)

    livro.save((err) => {
      if (err) {
        res.status(500).send({ message: `Failed to add book: ${err.message} ` })
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static update = (req, res) => {
    const id = req.params.id

    Book.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Book updated with success' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }

  static destroy = (req, res) => {
    const id = req.params.id

    Book.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Book deleted with success' })
      } else {
        res.status(500).send({ message: err.message })
      }
    })
  }
}

export default BookController
