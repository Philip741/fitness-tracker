const router = require('express').Router();
const db = require('../../models');

// get last workout
router.get('/', async (req,res) => {
        
    try {
        dbData = await db.Workout.aggregate([
            {
              $addFields: {
                  totalDuration: {
                      $sum: "$exercises.duration"
                  }
              },
            },
        ])
        res.json(dbData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get range of workouts
router.get('/range', async (req,res) =>{
    try{
    rangeData = await db.Workout.aggregate([
        {
            $addFields: {
                  totalDuration: {
                      $sum: "$exercises.duration"
                  }
              },
        },
        {
            "$sort": { day: -1}
        },
        {
            "$limit": 7
        }
    ])
    res.json(rangeData)
    } catch (err) {
        res.status(500).json(err);
    }
})

// Initial workout creation
router.post('/', (req, res) => {
    db.Workout.create(req.body, (err, data) => {
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
   db.Workout.findOneAndUpdate(updateFilter,updateExercises, function (err, data) {
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

//