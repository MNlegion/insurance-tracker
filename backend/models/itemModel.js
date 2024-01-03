const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a description of the item."],
    }, 
    makeModelSerial: {
      type: String,
    },
    location: {
      type: String,
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a quantity."],
    },
    dateOfPurchase: {
      type: Date,
    },
    costOfItem: {
      type: Number,
    },
    costOfReplacement: {
      type: Number,
    },
    itemCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);