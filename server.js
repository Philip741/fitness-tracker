const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const path = require("path");
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app; // for testing via mocha/chai