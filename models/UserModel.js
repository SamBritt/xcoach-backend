const pool = require("../db");

const createUser = async (name, email, password) => {
  const res = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, password]
  );
  return res.rows[0];
};

const getUsers = async () => {
  const res = await pool.query("SELECT * FROM users");
  return res.rows;
};

module.exports = { createUser, getUsers };
