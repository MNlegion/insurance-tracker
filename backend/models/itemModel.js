const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a description of the item."],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a quantity."],
    },
    // makeModelSerial: {
    //   type: String,
    // },
    // location: {
    //   type: String,
    // },
    // dateOfPurchase: {
    //   type: Date,
    // },
    // costOfItem: {
    //   type: Number,
    // },
    // costOfReplacement: {
    //   type: Number,
    // },
    // itemCategory: {
    //   type: String,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);