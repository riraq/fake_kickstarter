const router = require('express').Router();

const userRoutes = require('./project_routes');

router.use('/users', userRoutes);

module.exports = router;
