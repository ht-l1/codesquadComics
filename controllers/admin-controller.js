// replace the data.js file and require the comicSchema
const Comic = require('../models/comic-model');
// const siteData = require('../data/data');

module.exports = {
  admin: (request, response) => {
    response.render('pages/admin', {
      copyrightYear: siteData.year,
    });
  },

  create: (request, response) => {
    response.render('pages/create', {
      copyrightYear: siteData.year,
    });
  },

  update: (request, response) => {
    const { _id } = request.params;
    const foundBook = booksData.find(book => book._id === _id);
    response.render('pages/update', {
      copyrightYear: siteData.year,
      foundBook: foundBook
    });
  }
}