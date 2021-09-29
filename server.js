'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3002;
const getBook = require('./Modual/getBooks.js');
const Book = require('./models/books.js')


app.use(cors());
app.use(express.json())


app.get('/books', getBook);

app.post('/books', async (request, response) => {
    
    try {

      const bookInfo = request.body;

      const newBook = await Book.create({
        title: bookInfo.title,
        description: bookInfo.description,
        status: bookInfo.status,
        email: bookInfo.email,
      });
      response.status(201).send(newBook)
    } catch (error) {
      response.status(500).send(`Error in new book`);
    }
});

app.delete('/books/:id', async (request, response) => {
  const id = request.params.id;
  try{
    await Book.findByIdAndDelete(id);
    response.status(204).send('success')
  } catch (error) {
    response.status(404).send(`Book ID:${id} was not to be able to be deleted`)
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
