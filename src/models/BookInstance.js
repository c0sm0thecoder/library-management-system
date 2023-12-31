const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Available", "Not available"],
      default: "Available",
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
  }
);

module.exports = mongoose.model("Schema", bookInstanceSchema);
