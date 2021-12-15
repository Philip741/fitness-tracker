//const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const FitnessModel = require('../models/fitness');
const assert = require('chai').assert;
const expect = require('chai').expect;

const exerciseData = [{
  day: new Date(new Date().setDate(new Date().getDate() - 1)),
  exercises: {
  type: "arm raises",
  name: "test exerciser",
  duration: 10,
  weight: 50,
  reps: 5,
  sets: 1
  }
}];

describe('Mongoose tests', () => {

  it('Initialize model insert data', async () => {
      let newExercise = new FitnessModel(exerciseData);
      let savedExercise = await newExercise.save();

      expect(savedExercise._id);
      expect(savedExercise.day);
  });

  it('Test insert many into collection', async () => {
     let newExercise = await FitnessModel.collection.insertMany(exerciseData);
     expect(FitnessModel._id);
     expect(FitnessModel.day);
     expect(FitnessModel.exercises);
  })
});
