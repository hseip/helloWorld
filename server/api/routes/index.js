const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 1200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ]});
})

module.exports = router;