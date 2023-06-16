const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

// const databaseURL = 'mongodb://localhost:27017/codesquadComics';

// mongoose.connect(databaseURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log('Connected to MongoDB successfully!');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
