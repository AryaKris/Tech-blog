//A lot of the api routes would be  POST request, PUT request and Delete request

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
