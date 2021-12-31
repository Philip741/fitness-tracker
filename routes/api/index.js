const router = require('express').Router();
const workouts = require('./workouts.js');

router.use('/workouts', workouts);
module.exports = router;