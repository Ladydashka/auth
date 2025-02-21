const router = require('express').Router();
const { Comment_Rating } = require('../../db/models');

router.get('/', async (req, res) => {
	const comments = await Comment_Rating.findAll();
	res.status(200).json({ comments: comments });
});

router.post('/', (req, res) => {
	const newCommentRating = req.body;
	res.status(201).json({ comment: newCommentRating });
});

router.put('/:id', (req, res) => {
	const updatedCommentRating = req.body;
	res.status(200).json({ comment: updatedCommentRating });
});

router.delete('/:id', (req, res) => {
	res.status(204);
});

module.exports = router;
