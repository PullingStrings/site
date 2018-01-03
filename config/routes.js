const router = require('express').Router();
const babys  = require('../controllers/babys');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/babys')
  .get(babys.index)
  .post(secureRoute, babys.create);

router.route('/babys/:id')
  .get(babys.show)
  .put(secureRoute, babys.update)
  .delete(secureRoute, babys.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
