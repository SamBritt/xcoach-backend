const workoutModel = require('../models/WorkoutModel');

exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await workoutModel.getWorkouts();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.createWorkout = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newWorkout = await workoutModel.createWorkout(name, description);
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
