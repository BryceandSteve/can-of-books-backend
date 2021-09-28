'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
app.use(cors());
const PORT = process.env.PORT || 3002;
console.log(mongoose);

const Book = require('./models/book.js')

app.get('/books', async (request, response) => {
  const searchQuery = {};
  if (request.query.string){
    console.log(books)
    searchQuery.query.string = request.query.string;
  }
  const books = await Book.find(searchQuery);
  response.send(books);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
