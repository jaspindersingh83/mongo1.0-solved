const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();
server.use(bodyParser.json());

// Todo pats

const userRoutes = require("./Users/routes");
userRoutes(server);

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Budget")
  .then(function () {
    server.listen(3000, function () {
      console.log("The databases are connected to server");
    });
  })
  .catch(function (err) {
    console.log("Database Connection Failed");
  });
