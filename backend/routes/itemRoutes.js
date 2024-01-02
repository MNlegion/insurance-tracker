const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController');

router.route('/').get(getItems).post(createItem);
router.route('/:id').put(updateItem).delete(deleteItem);

// Below individual routes are same as above but cleaner
// router.get('/', getItems);
// router.post('/', createItem);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);

module.exports = router;