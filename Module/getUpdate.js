'use strict'

const Book = require('../models/books')

const getUpdate = async (request, response) => {

    const id = request.params.id;
    const email = request.query.email;

    if(email){
        const updatingBook = await Book.findOne({
          id: id, 
        //   email: email,
        });
      
      if(!updatingBook) {
        response.status(400).send('Failure!')
      } else{
        const updatedBook = await Book.findByIdAndUpdate(id, request.body, {new: true});
        response.send(updatedBook);
      };
    }
};

module.exports = getUpdate;