'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book.js')


async function seed(){
    await Book.create({
        Title: 'The Black Tattoo',
        genre: 'Fantasy',
        description: 'There is a tattoo, and it is black.',
        checkedIn: true,
    });
         console.log('book is here');
    

    await Book.create({
        Title: 'SuperHuman',
        genre: 'Fantasy',
        description: 'They are like superman, but if they were teenagers, and only had one power apiece.',
        checkedIn: false,
    });

         console.log('book is not here');

    
    await Book.create({
        Title: 'DragonBall Z',
        genre: 'Fantasy',
        description: 'He\'s over 9000!',
        checkedIn: true,
    });
        console.log('book is here');

};

module.exports = seed;
console.log(seed)
