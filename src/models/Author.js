const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  about: { type: String, required: true },
  birth_date: { type: Date, required: true },
  death_date: { type: Date },
});

module.exports = mongoose.model("Author", authorSchema);
