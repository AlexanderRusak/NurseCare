const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const advSchema = new Schema({
  title: String,
  text: String,
  imageLink: String,
  link: String,
});

module.exports = mongoose.model("Adv", advSchema);
