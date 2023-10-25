const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reviewSchema = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  review: { type: String, required: true },
});

const review = mongoose.model("review", reviewSchema);

module.exports = review;
