const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
  }
);

module.exports = mongoose.model("Genre", genreSchema);
