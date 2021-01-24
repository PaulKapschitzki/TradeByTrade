const express = require('express');
const router = express.Router();
const Trade = require('../models/trades.model');

// All trades route
router.get('/', async (req, res) => {
    res.send('All trades');
});

// New trade route
router.get('/new', async (req, res) => {
    const trade = new Trade();
    try {
        res.render('trades/new', {
            trade: trade
        });
    } catch {
        res.redirect('/trades'); // redirect to trades page
    }
});

// Create new trade
router.post('/new', async (req, res) => {
    const trade = new Trade({
        orderType: req.body.orderType,
        status: req.body.status,
        symbole: req.body.symbole,
        commentsEntry: req.body.commentsEntry
    });
});

module.exports = router;