const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  sex: Boolean,
  birthDate: Number,
  cvId: String,
});

module.exports = mongoose.model("Users", usersSchema);
