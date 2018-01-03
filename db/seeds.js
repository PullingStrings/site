const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Baby      = require('../models/baby');

const babyData = [{
  title: 'Tim',
  image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1538538_573230372752861_370255472_n.jpg',
  category: 'Dinner'
}, {
  title: 'Tito',
  image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1516879_268343206655563_1975558125_n.jpg',
  category: 'Dinner'
}, {
  title: 'Tre',
  image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/928413_471097506327501_1175692522_n.jpg',
  category: 'Desert'
}, {
  title: 'Ruth',
  image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/e15/1516917_1415620932013462_1276694992_n.jpg',
  category: 'Lunch'
}, {
  title: 'Cara',
  image: 'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/11820589_1071085172916383_422777308_n.jpg',
  category: 'Breakfast'
}, {
  title: 'Luke',
  image: 'https://i.pinimg.com/originals/64/dd/d0/64ddd0b8ee5c83d72fed6a67af999214.jpg',
  category: 'Dinner'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Baby.create(babyData))
  .then(babys => console.log(`${babys.length} babies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
