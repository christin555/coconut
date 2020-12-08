const router = require('express-promise-router')();
const apiController = require('../controllers/api.controller');

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Started!',
        version: '1.0.0',
    });
});

router.get('/users/getUser/:id', apiController.getUser);
router.get('/users/getCurrentUser', apiController.getCurrentUser);
router.put('/users/editUser', apiController.editUser);

router.get('/events', apiController.getEvents);
router.post('/event', apiController.createEvent);
router.get('/event/:id', apiController.getEvent);
router.put('/event', apiController.editEvent);
router.get('/events/participants', apiController.getParticipants);
router.put('/events/participants', apiController.setAssignParticipants);

router.get('/document/:id', apiController.getDocument);
router.put('/document', apiController.editDocument);
router.post('/document', apiController.createDocument);
router.get('/documents', apiController.getDocuments);

module.exports = router;
