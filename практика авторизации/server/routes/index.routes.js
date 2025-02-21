const router = require('express').Router();

const commentsApiRouter = require('./api/comments.routes');
const guidesApiRouter = require('./api/guides.routes');
const authApiRouter = require('./api/auth.routes');
const usersApiRouter = require('./api/users.routes');

router.use('/api/comments', commentsApiRouter);
router.use('/api/guides', guidesApiRouter);
router.use('/api/auth', authApiRouter);
router.use('/api/users', usersApiRouter);

module.exports = router;
