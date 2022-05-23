const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('all dogs')
})

router.get('/:id', (req, res) => {
    res.send('viewing one dogs')
})

router.get('/:id/edit', (req, res) => {
    res.send('eding one dogs')
})

module.exports = router;