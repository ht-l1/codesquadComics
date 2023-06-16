// Require Express, Express Router, and site-controller.js  
const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

// Inside of your app.js, you will need to identify which routes will load the homepage, about page, and login page. Once you have identified these 3 routes in your app.js, cut those routes and paste them into site-routes.js.  
// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/about', (req, res) => {
//     res.render('about');
// });

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// Make sure to update these routes to use the Express Router instead of app  
// router.route('/')
//     .get(siteCtrl.home);

// router.route('/about')
//     .get(siteCtrl.about);

// router.route('/login')
//     .get(siteCtrl.login);

// Remember that the value is coming from the handler located in site-routes.js. You are removing from site-routes.js and pasting them into site-controller.js
// Once the site-controller.js file has been completed. Make sure to update site-routes.js where the GET method is calling for the object that contains its original handler. 
router.route('/')
	.get(siteCtrl.home);

router.route('/about')
	.get(siteCtrl.about);

router.route('/login')
	.get(siteCtrl.login);

// Also, make sure to export the router using module.exports()  
module.exports = router;