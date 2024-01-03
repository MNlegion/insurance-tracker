const asyncHandler = require('express-async-handler');

const Item = require('../models/itemModel');

// @desc   Get all items
// @route GET /api/items
// @access Private
const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find();

    res.status(200).json(items)
});

// @desc   Create Item
// @route POST /api/items
// @access Private
const createItem = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }

    const item = await Item.create({
        text: req.body.text
    })

    res.status(200).json(item)
});

// @desc   Update item by id
// @route PUT /api/items/:id
// @access Private
const updateItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Item ${req.params.id}` })
});

// @desc   Delete Item by id
// @route DELETE api/items/:id
// @access Private
const deleteItem = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Item ${req.params.id}` })
});


module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
}