var express = require('express');
const { EconomicActivity } = require('../models/economicActivity');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const documents = await EconomicActivity.find();
  res.json(documents);
});

module.exports = router;
