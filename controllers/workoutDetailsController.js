const workoutDetailsModel = require('../models/WorkoutDetailsModel');

exports.getAllWorkoutDetails = async (req, res) => {
  try {
    const workoutDetails = await workoutDetailsModel.getWorkoutDetails();
    res.status(200).json(workoutDetails);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.createWorkoutDetail = async (req, res) => {
  try {
    const { workoutId, userId } = req.body;
    const newWorkoutDetail = await workoutDetailsModel.createWorkoutDetail(workoutId, userId);
    res.status(201).json(newWorkoutDetail);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};