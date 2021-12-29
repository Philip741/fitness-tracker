const router = require('express').Router();
const Workouts = require('../../models/workout');

// get last workout
router.get('/', async (req,res) => {
        //console.log(Workouts);
        //allWorkouts = await Workouts.find({});
        //res.json(allWorkouts);
         Workouts.find({})
           .sort({ date: -1 })
           .then(dbTransaction => {
             res.json(dbTransaction);
           })
           .catch(err => {
             res.status(400).json(err);
           });
});
// Initial workout creation
router.post('/', (req, res) => {
    Workouts.create(req.body, (err, data) => {
    if (err) {
      console.log(err); 
    } else {
      res.json(data);
    }
  })
  })
// add exercises
router.put('/:id', (req,res) => {
   const updateFilter = {_id: req.params.id };
   const updateExercises = {$push: {exercises: req.body}};
   Workouts.findOneAndUpdate(updateFilter,updateExercises, function (err, data) {
        if (err) {
            res.send(err);
          } else {
            res.json(data);
          }
    });
})

module.exports = router;
// create workout


// get workouts in range

//router.get('/workouts/range', )