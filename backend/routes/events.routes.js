const router = require('express-promise-router')();
const storyController = require('../controllers/events.controller');

router.post('/getEvents', storyController.getMyStories);
module.exports = router;
