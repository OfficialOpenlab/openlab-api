const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.connectionString
});

module.exports = pool;