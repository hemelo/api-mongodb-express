import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    author: { type: String, required: true },
    language: { type: String, required: true },
    pages: { type: Number },
    year: { type: Number },
    country: { type: String },
    link: { type: String, index: true, unique: true }
  }
)

const Book = mongoose.model('books', bookSchema)
Book.createIndexes()

export default Book
