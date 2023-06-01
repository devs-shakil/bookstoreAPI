const express = require('express');
const router = express.Router();
const { books, booksByID, booksPost, updateBook, deleteBook } = require('../controllers/book');

//get //books
router.get('/books', books)


// GET /books/:id
router.get('/books/:id', booksByID)
  
  // POST /books
  router.post('/books', booksPost);
  
  // PUT /books/:id
  router.put('/books/:id', updateBook);
  
  // DELETE /books/:id
  router.delete('/books/:id',deleteBook)


module.exports = router;