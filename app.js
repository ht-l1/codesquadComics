// First, require the following dependencies: express and morgan
// Create a const variable called app with the value of express()
// Create a const variable called port with the value of 3000
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
const path = require('node:path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./routes/index-routes')
const connection = require('./config/connection')
app.set("view engine", "ejs");

// Use morgan as a middleware for this project
app.use(morgan('dev'));
// app.use(morgan("combined"))

// HW11_1 - Adding Path module and EJS to app.js 
// In app.js, require the Path module
// Use the Path module to point Node.js to the public directory that contains all of your assets (images, scripts.js, and styles.js) for your project
// Configure Node.js to use EJS as its views engine
// const path = require('path');

app.use(express.static(path.join(__dirname, "public")));

// Homework 12 - In app.js require Method Override
// Use app.use() to use Method Override and Express URLEncoded  
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
// Create five  basic GET routes with the following information
// HW11_2 - Update all routes handlers
//      Update all 5 GET routes handlers to now render EJS files as the response from the server

// Homework 12 - At this point, you shouldn't have any routes in your app.js (they were moved to their new home in step 2 of this assignment).
// Require the index-routes.js file  

// Add the app.use() method 
// app.use('/', routes);
app.use(routes);

// HW11_3 - Add routes with parameters
//      Create 2 GET routes with parameter with the following information
// PATH: /books/:id, HANDLER: render a file call book that will show the books details page
// PATH: /admin-console/update-book/:id, HANDLER: render the update comic book form page

// app.get('/books/:id', (req, res) => {
//     const bookId = req.params.id;
//     res.render('book', { book: bookDetails }); 
//   });

// app.get('/admin-console/update-book/:id', (req, res) => {
//     const bookId = req.params.id;
//     res.render('update-book-form', { book: bookDetails }); 
//   });

// SERVER
// use app.listen() to start the server and send a console.log to the terminal with the localhost URL
app.listen(PORT, () => {
    console.log(`The Server is listening on http://localhost:${PORT}`)
});