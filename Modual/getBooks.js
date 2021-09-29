'use strict'

const Book = require('../models/books.js')

async function grabBooks (request, response){
    try {
        const entry = {};
        if (request.query.email){
            entry.email = request.query.email;
        }
        const getBooks = await Book.find(entry);
            response.send(getBooks);
        } catch (error) {
            console.error('Unable to find book', error);
    }
  }

module.exports = grabBooks;