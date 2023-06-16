// Require Express Router  
// const router = require('express').Router();
const express = require('express');
const router = express.Router();
// const express = require('express');

// Require admin-routes, book-routes, and site-routes   
const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');
const siteRoutes = require('./site-routes');

// Using Router, you need 3 routes.
router.use('/', siteRoutes);
router.use('/books', bookRoutes);
router.use('/admin', adminRoutes);

// Make sure to export the router using module.exports() 
module.exports = router;