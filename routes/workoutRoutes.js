// routes/workoutRoutes.js
const express = require('express');
const workoutController = require('../controllers/workoutController');
const router = express.Router();

router.get('/workouts', workoutController.getAllWorkouts);
router.post('/workouts', workoutController.createWorkout);

module.exports = router;