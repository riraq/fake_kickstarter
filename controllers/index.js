const router = require('express').Router();

const apiRoutes = require('./api');
const loginRoutes = require('./login-routes.js');

router.use('/', loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;
