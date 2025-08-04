const express = require('express');
const router = express.Router();
const Example = require('../models/Example');

router.get('/', async (req, res) => {
    const examples = await Example.find();
    res.json(examples);
});

router.post('/', async (req, res) => {
    const newExample = new Example({ name: req.body.name });
    const saved = await newExample.save();
    res.json(saved);
});

module.exports = router;
