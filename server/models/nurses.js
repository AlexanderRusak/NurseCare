const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nursesSchema = new Schema({
  secondName: String,
  address: String,
  info: String,
  docScan: String,
  docNumber:String,
  idScan: String,
  isValidated: Boolean,
});

module.exports = mongoose.model("Nurses", nursesSchema);
