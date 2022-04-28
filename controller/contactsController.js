const pool = require('../db.js');

const getUsers = (req, res) => {
	pool.query('SELECT *FROM contacts', (error, results) => {
		if(error) {
			throw error;
		}
		res.render('index', {contacts: results.rows});
	});
}

const getUser = (req, res) => {
	const id = parseInt(req.params.id);

	pool.query('SELECT * FROM contacts WHERE id=$1', [id], (error, results) => {
		if(error) {
			throw error;
		}
		res.json(results.rows);
	});
}

module.exports = {
	getUsers,
	getUser
}