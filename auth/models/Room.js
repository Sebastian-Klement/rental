const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: "Name is required",
  },
  location: {
    type: String,
    required: "Location is required",
  },
  images: {
    type: [],
  },
});

module.exports = mongoose.model("Room", rommSchema);
