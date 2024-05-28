const pool = require("../db");

const createWorkoutDetail = async (workoutId, userId) => {
  const res = await pool.query(
    "INSERT INTO workout_details (workout_id, user_id, participation_date) VALUES ($1, $2, NOW()) RETURNING *",
    [workoutId, userId]
  );
  return res.rows[0];
};

const getWorkoutDetails = async () => {
  const res = await pool.query("SELECT * FROM workout_details");
  return res.rows;
};

module.exports = { createWorkoutDetail, getWorkoutDetails };
