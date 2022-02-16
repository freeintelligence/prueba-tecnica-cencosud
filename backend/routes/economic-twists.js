var express = require('express');
const { EconomicTwist } = require('../models/economicTwist');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const documents = await EconomicTwist.find();
  res.json(documents);
});

module.exports = router;
