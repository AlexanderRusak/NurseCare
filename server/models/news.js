const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  text: String,
  imageLink: String,
  link: String,
});

module.exports = mongoose.model("News", newsSchema);
