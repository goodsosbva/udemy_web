const express = require('express');
const router = express.Router();

router.get('/topsecret', (req, res) => {
    res.send('this is top secret')
})

router.get('/deleteeverything', (req, res) => {
    res.send('deleted it all')
})

module.exports = router;