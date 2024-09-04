const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.port || 3000;
const mongoose = require("mongoose");
const server = express();

server.use(bodyParser.json());
server.listen(port, () => {
  console.log(`server running at ${port}`);
});

//create a promise
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/bears")
  .then(() => {
    console.log("the database is running nicely");
  })
  .catch(function (err) {
    console.log("Database Connection Failed");
  });

// we have another file database server

const bearRoutes = require("./Bears/routes");
bearRoutes(server);
// 27015 port localhost:27015
