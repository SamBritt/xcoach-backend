const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',          // Replace with your PostgreSQL username
  host: 'localhost',              // Or your database host
  database: 'your_database_name', // Replace with your database name
  password: 'your_password',      // Replace with your password
  port: 5432,                     // Default PostgreSQL port
});

module.exports = pool;