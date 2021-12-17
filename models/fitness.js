const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitSchema = new Schema({
  day: {
      type: Date,
      default: Date.now(),
  },
  exercise: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
  },
  
});

//const exerciseData = 

module.exports = mongoose.model("Fitness", fitSchema);