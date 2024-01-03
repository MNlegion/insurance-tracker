/*
Model Information
1. Description of Item
2. Make, model, and/or serial number of item
3. Price of Item
4. Date of Purchase
5. Location of Purchase
6. Estimate cost of replacement
7. Appraisal of item
8. Picture of item
9. Item ID
10. Item Category
*/

const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a description of the item."],
    },
    makeModelSerial: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    dateOfPurchase: {
      type: Date,
      required: false,
    },
    locationOfPurchase: {
      type: String,
      required: false,
    },
    estimateCostOfReplacement: {
      type: Number,
      required: false,
    },
    appraisal: {
      type: Number,
      required: false,
    },
    picture: {
      type: String,
      required: false,
    },
    itemID: {
      type: String,
      unique: true,
    },
    itemCategory: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);