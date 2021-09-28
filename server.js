'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
app.use(cors());
const PORT = process.env.PORT || 3002;
const seed = require('./seed.js');
seed();
const Book = require('./models/book.js')

app.get('/books', async (request, response) => {
  try {
  const searchQuery = {};
  if (request.query.string){
    console.log(books);
    searchQuery.genre.string = request.query.string;
  }
  const books = await Book.find(searchQuery);
  response.send(books);
  console.log(books);
} catch (error) {
    console.error('Unable to find book', error);
}
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
