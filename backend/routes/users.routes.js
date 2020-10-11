const router = require('express-promise-router')();
const usersController = require('../controllers/users.controller');

router.get('/getUser/:id', usersController.getUser);
router.post('/createUser', usersController.createUser);
router.post('/authenticate', usersController.authenticate);

module.exports = router;
