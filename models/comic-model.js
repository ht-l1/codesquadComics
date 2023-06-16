// Open comic-model.js in VSCode and require Mongoose  
const mongoose = require('mongoose');
// const {Schema} = mongoose;

// Define the comic schema -  Create a new variable called comicSchema. As a value, make a new Schema.
// The Schema should include the following keys: title, author, publisher, genre, pages, rating, synopsis, image
const comicSchema = new mongoose.Schema({
// const comicSchema = new Schema ({
  title: String,
  author: String,
  publisher: String,
  genre: String,
  pages: Number,
  rating: Number,
  synopsis: String,
  image: image,
  }
);

// Create a new variable called Comic that has the Mongoose model as the value. The model should be able to create a collection called comics and also use the comicSchema for the collection structure
const Comic = mongoose.model('Comic', comicSchema, 'comics');

// Export the Comic model
module.exports = Comic;
