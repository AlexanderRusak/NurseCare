const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  sex: Boolean,
  birthDate: Number,
  phoneNumber: String,
  cv:Object
});

module.exports = mongoose.model("Users", usersSchema);
