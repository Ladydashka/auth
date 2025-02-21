const router = require('express').Router();
const { Guide } = require('../../db/models');

router.get('/', async (req, res) => {
	const guides = await Guide.findAll();
	res.status(200).json({ guides: guides });
});

router.post('/', (req, res) => {
	res.status(200).json({ message: 'success' });
});

router.get('/:id', (req, res) => {
	const guideId = req.params.id;
	res.status(200).json({ guide: { id: guideId } });
});

router.put('/:id', (req, res) => {
	const updatedGuide = req.body;
	res.status(200).json({ guide: updatedGuide });
});

router.delete('/:id', (req, res) => {
	res.status(204);
});

module.exports = router;
