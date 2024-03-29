const asyncHandler = require("express-async-handler");

const Item = require("../models/itemModel");
const User = require("../models/userModel");

// @desc   Get all items
// @route GET /api/items
// @access Private
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({ user: req.user._id });

  res.status(200).json(items);
});

// @desc   Create Item
// @route POST /api/items
// @access Private
const createItem = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text");
  }

  const item = await Item.create({
    text: req.body.text,
    quantity: req.body.quantity,
    user: req.user.id,
    // makeModelSerial: req.body.makeModelSerial,
    // location: req.body.location,
    // dateOfPurchase: req.body.dateOfPurchase,
    // costOfItem: req.body.costOfItem,
    // costOfReplacement: req.body.costOfReplacement,
    // itemCategory: req.body.itemCategory,
  });

  res.status(200).json(item);
});

// @desc   Update item by id
// @route PUT /api/items/:id
// @access Private
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  //   Check for User
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }

  //   Check if user owns item
  if (item.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedItem);
});

// @desc   Delete Item by id
// @route DELETE api/items/:id
// @access Private
const deleteItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    res.status(404);
    throw new Error("Item not found");
  }

  //   Check for User
  if (!req.user) {
    res.status(404);
    throw new Error("User not found");
  }

  //   Check if user owns item
  if (item.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await item.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
