// Make sure to replace the data.js file and require the comicSchema
const Comic = require('../models/comic-model');
// const siteData = require('../data/data');

// Use module.exports() that will have a value of an object. 
module.exports = {
    home: (req, res) => {
        res.render('pages/index', {
            comics: siteData
        });
    },
    about: (req, res) => {
        res.render('pages/about', {
        });
    },
    login: (req, res) => {
        res.render('pages/login', {
        });
    }
}
  