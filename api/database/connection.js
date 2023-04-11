const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: 'postgres://ohwoawvz:nC6qgTS29By9aT3xkRdaJc1CymAehAdq@ziggy.db.elephantsql.com/ohwoawvz'
});

module.exports = pool;