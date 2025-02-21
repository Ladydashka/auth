const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/:id', (req, res) => {
	const userId = req.params.id;
	res.status(200).json({ guide: { id: userId } });
});

router.delete('/:id', async (req, res) => {
	res.status(204);
});

router.put('/:id', async (req, res) => {
	res.status(200).json({ message: 'success' });
});

module.exports = router;
