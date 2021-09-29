'use strict'

const Book = require('../models/books.js')

const getDelete = async (request, response) => {
    const id = request.params.id;
    const email = request.query.email;
  
  
    if(email){
    const book = await Book.findOne({
      id: id, 
      email: email,
    });
  
  if(book) {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success')
  } else{

  response.status(400).send('unable to delete book');
  };
    }
    // } catch (error) {
    //   response.status(404).send(`Book ID:${id} was not to be able to be deleted`)
    
  }
  module.exports =  getDelete;