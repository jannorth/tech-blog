const router = require('express').Router();

const userRoutes = require('./userRoute');
const blogPostRoutes =  require("./blogPostRoute")

// TO DO rename route here?
router.use('/users', userRoutes);
router.use("/blogPost", blogPostRoutes)

module.exports = router;
