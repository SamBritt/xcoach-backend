const pool = require('../db');

const createWorkout = async (name, description) => {
  const res = await pool.query(
    'INSERT INTO workouts (name, description, date) VALUES ($1, $2, NOW()) RETURNING *',
    [name, description]
  );
  return res.rows[0];
};

const getWorkouts = async () => {
  const res = await pool.query('SELECT * FROM workouts');
  return res.rows;
};

module.exports = { createWorkout, getWorkouts };
