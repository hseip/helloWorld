const express = require('express');
const BASE_db = require('../db');
const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log('incoming request: ', req.query)
  try {
    let results = await BASE_db.query1(req.query.top);
    res.json(results);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }


})

module.exports = router;