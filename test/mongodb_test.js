//const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
let chai = require('chai');
const db = require('../models');
const assert = require('chai').assert;
const expect = require('chai').expect;
let chaiHttp = require('chai-http');
let should = chai.should();
//let server = require('../server');
const baseUrl = "http://localhost:3000/"

chai.use(chaiHttp);

console.log(db);
const exerciseData = [{
  day: new Date(new Date().setDate(new Date().getDate() - 1)),
  exercises: [{
  type: "arm raises",
  name: "test exerciser",
  duration: 10,
  weight: 50,
  reps: 5,
  sets: 1
  }]
}];



describe('Mongoose tests', () => {

  it('Initialize model insert data', async function () {
      let newExercise = new db.Workout(exerciseData);
      let savedExercise = await newExercise.save();

      expect(savedExercise._id);
      expect(savedExercise.day);
  });

  it('Test insert exercises', async function () {
     let newExercise = await db.Workout.insertMany(exerciseData);
     expect(db._id);
     expect(db.day);
     expect(db.exercises);
  })

  it('Test aggregate data' , async function () {
      let aggrData = await db.Workout.aggregate([
        {
          "$group": {
              "_id": "tempId",
              "totalDuration": {
                  $sum: {
                      $sum: "$exercises.duration"
                  }
              }
          }
        }
      ])
      for await(const d of aggrData) {
        expect(db.Workout.totalDuration);
      }
  })
});

describe('/GET index html', () => {
  it('it should GET the index static html', (done) => {
    chai.request(baseUrl)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
        });
        done();
  });
  it('it should GET the exercise static html', (done) => {
    chai.request(baseUrl)
        .get('/exercise')
        .end((err, res) => {
              res.should.have.status(200);
        });
        done();
  });
});
