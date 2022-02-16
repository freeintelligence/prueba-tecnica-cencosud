var express = require('express');
const { EconomicTwist } = require('../models/economicTwist');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const documents = await EconomicTwist.find();
  res.json(documents);
});

router.get('/create', async function(req, res, next) {
  const first = new EconomicTwist({ name: 'prueba de nombre' });
  await first.save();

  res.json({

  });
});

module.exports = router;
