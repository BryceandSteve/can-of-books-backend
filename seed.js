'use strict'
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book.js')
mongoose.connect(process.env.DATABASE_URL);


async function seed(){
    await Book.create({
        Title: 'The Black Tattoo',
        description: 'There is a tattoo, and it is black.',
        checkedIn: true,
        email: 'brycebot@gmail.com'
    });
         console.log('book is here');
    

    await Book.create({
        Title: 'SuperHuman',
        description: 'They are like superman, but if they were teenagers, and only had one power apiece.',
        checkedIn: false,
        email: 'Isteve@id.apple.com'
    });

         console.log('book is not here');

    
    await Book.create({
        Title: 'DragonBall Z',
        description: '(s)He\'s over 9000!',
        checkedIn: true,
        email: 'Isara@id.apple.com'
    });
        console.log('book is here');

        mongoose.disconnect();
};

seed();
console.log(seed)
