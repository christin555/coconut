const router = require('express-promise-router')();
const usersController = require('../controllers/users.controller');

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Started!',
        version: '1.0.0',
    });
});

router.get('/users/getUser/:id', usersController.getUser);

module.exports = router;
