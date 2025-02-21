const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { Guide } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
	const { name, email, password } = req.body;
	console.log(name, email, password);
	res.status(200).json({ message: 'success' });
});

router.post('/sign-in', async (req, res) => {
	res.status(200).json({ message: 'success' });
});

router.get('/logout', (req, res) => {
	res.status(200).json({ message: 'success' });
});

module.exports = router;
