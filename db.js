const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'hugo',
	password: '19602000',
	host: 'localhost',
	port: 5432,
	database: 'contacts'
});

module.exports = pool;