const mongoose = require('mongoose');

const babySchema = mongoose.Schema({
  title: { type: String, required: 'You need to put a Title' },
  image: { type: String, required: 'You need an image here also' },
  category: { type: String, required: 'Also a category' }
});

module.exports = mongoose.model('baby', babySchema);
