'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3002;
const getBook = require('./Modual/getBooks.js')


app.use(cors());


app.get('/books', getBook);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
