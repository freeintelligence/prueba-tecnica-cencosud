var express = require('express');
var router = express.Router();
const { EconomicActivity } = require('../models/economicActivity');
const { body, validationResult } = require('express-validator');

router.get('/', async function(req, res, next) {
  const documents = await EconomicActivity.find().sort({ _id: -1 });
  res.json(documents);
});

router.post('/', body('name').isString(), body('name').isLength({ min: 1, max: 1024 }), async function(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const created = await EconomicActivity.create({ name: req.body.name });

  return res.json(created);
});

module.exports = router;
