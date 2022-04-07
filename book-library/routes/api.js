const express = require("express");
const router = express.Router();
const BookController = require('../controller/BookController')

// Requests
router.get('/books', BookController.get_books);
router.post('/addBook', BookController.add_book);
router.post('/deleteBook/:isbn', BookController.delete_books);
router.post('/updateBook/:isbn', BookController.update_book);

module.exports = router;