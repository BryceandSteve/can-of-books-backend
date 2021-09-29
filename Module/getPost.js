'use strict'

const Book = require('../models/books.js')

const getPost = async (request, response) => {
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
  };

  module.exports = getPost;