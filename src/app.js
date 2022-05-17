import express from "express"
import books from '../books.js';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.redirect("/books")
}) 

app.get('/books', (req, res) => {
  res.status(200).json(books)
})

app.get('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  res.json(books[index]);
})

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('Book added with sucess')
})

app.put('/books/:id', (req, res) => {
  let index = findBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
})

app.delete('/books/:id', (req, res) => {
  let {id} = req.params;
  let index = findBook(id);
  books.splice(index, 1);
  res.send(`Book ${id} deleted with success`);
})


function findBook(id) {
  return books.findIndex(livro => livro.title == id)
}

export default app