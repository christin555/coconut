const router = require('express-promise-router')();
const documentsController = require('../controllers/documents.controller');

router.get('/getDocument/:id', documentsController.getLenta);
module.exports = router;
