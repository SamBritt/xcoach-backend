const express = require('express');
const workoutDetailsController = require('../controllers/workoutDetailsController');
const router = express.Router();

router.get('/workoutDetails', workoutDetailsController.getAllWorkoutDetails);
router.post('/workoutDetails', workoutDetailsController.createWorkoutDetail);

module.exports = router;