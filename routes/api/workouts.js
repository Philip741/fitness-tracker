const router = require('express').Router();
const fitness = require('../../models/fitness');

// get last workout
router.get('/workouts', (req,res) => {
        fitness.find({})
          .sort({ date: -1 })
          .then(dbTransaction => {
            res.json(dbTransaction);
          })
          .catch(err => {
            res.status(400).json(err);
          });
});

// add exercises

// create workout


// get workouts in range

router.get('/workouts/range', )