const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a description of the item."],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);