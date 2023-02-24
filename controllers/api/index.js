const router = require('express').Router();

// TO DO rename routes
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
