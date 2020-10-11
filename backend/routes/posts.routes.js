const router = require('express-promise-router')();
const postsController = require('../controllers/posts.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/getLenta/', postsController.getLenta);
module.exports = router;
