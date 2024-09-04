///schema

const mongoose = require("mongoose");

const bearSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
    unique: true,
  },
  latinName: String,
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Bear", bearSchema);
