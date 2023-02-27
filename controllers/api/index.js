const router = require('express').Router();

const userRoutes = require('./userRoute');

// TO DO rename route here?
router.use('/users', userRoutes);

module.exports = router;
