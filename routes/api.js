const express = require('express');
const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/registerUser',userController.registerUser);
router.post('/loginUser',userController.loginUser);

//Event
router.post('/addEvent',auth,eventController.addEvent);
router.get('/getAllEvent',auth,eventController.getAllEvent);
router.delete('/deleteEvent/:id',eventController.deleteEvent);
router.put('/updateEvent/:id',eventController.updateEvent);

module.exports = router ;
