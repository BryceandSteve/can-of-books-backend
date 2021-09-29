'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const PORT = process.env.PORT || 3002;
const getBook = require('./Module/getBooks');
const getDelete = require('./Module/getDelete')
const getPost = require('./Module/getPost')
const getUpdate = require('./Module/getUpdate')


app.use(cors());
app.use(express.json())


app.get('/books', getBook);
app.post('/books', getPost);
app.delete('/books/:id', getDelete);
app.put('/books/:id' , getUpdate);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
