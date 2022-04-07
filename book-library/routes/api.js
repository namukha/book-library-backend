const express = require("express");
const router = express.Router();
const BookController = require('../controller/BookController')
const BookAuthenticator = require('../middleware/create_update')

// Requests
router.get('/books', BookController.get_books);
router.post('/addBook', BookAuthenticator.addBook(), BookController.add_book);
router.post('/deleteBook/:isbn', BookController.delete_books);
router.post('/updateBook/:isbn', BookAuthenticator.addBook(), BookController.update_book);

module.exports = router;