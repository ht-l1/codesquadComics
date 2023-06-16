// Require Express, Express Router, and site-controller.js  
const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/book-controller');

// BOOKS ROUTES
router.route('/')
    .get(booksCtrl.all_books)
    .post(booksCtrl.book_create_post)

router.route('/:_id')
    .get(booksCtrl.book_detail)
    .put(booksCtrl.book_update_put)
    .delete(booksCtrl.book_delete)

// Also, make sure to export the router using module.exports()  
module.exports = router;