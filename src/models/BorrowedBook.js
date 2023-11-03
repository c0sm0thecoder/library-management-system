const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowedBookSchema = new Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    borrowDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    returnDate: { type: Date },
    status: {
      type: String,
      required: true,
      enum: ["Borrowed", "Returned", "Overdue"],
      default: "Borrowed",
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

borrowedBookSchema.pre("save", function (next) {
  if (this.returnDate) {
    this.status = "Returned";
  } else if (new Date() > this.dueDate) {
    this.status = "Overdue";
  }
});

module.exports = mongoose.model("BorrowedBook", borrowedBookSchema);
