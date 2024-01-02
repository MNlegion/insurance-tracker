const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get Items' })
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create Item' })
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Item ${req.params.id}` })
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete Item ${req.params.id}` })
});

module.exports = router;