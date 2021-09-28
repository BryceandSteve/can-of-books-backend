'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  genre: String,
  description: String,
  checkedIn: Boolean,
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;