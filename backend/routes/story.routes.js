const router = require('express-promise-router')();
const storyController = require('../controllers/story.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/getMyStories', storyController.getMyStories);
module.exports = router;