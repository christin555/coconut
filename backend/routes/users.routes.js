const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/users/createUser', userController.createUser);
router.post('/users/suggestedPeople', userController.suggestedPeople);
router.get('/users/getAll', userController.listAllUsers);
router.get('/users/getUser/:userName', userController.getUser);
router.get('/users/getUserPosts/:id', userController.getUserPosts);
module.exports = router;
