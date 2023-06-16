// Require Express, Express Router, and site-controller.js  
const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

// ADMIN ROUTES
// fixing per Kit feedback: Review the admin routes again. There should only be 3 for admin (admin, create and update)
router.route('/')
  .get(adminCtrl.admin)

router.route('/create-book')
  .get(adminCtrl.create)

// need parameter to display individual books
router.route('/update-book/:id')
  .get(adminCtrl.update)

// Also, make sure to export the router using module.exports()  
module.exports = router;