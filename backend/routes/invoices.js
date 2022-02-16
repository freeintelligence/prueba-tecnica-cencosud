var express = require('express');
var router = express.Router();
const { Invoice } = require('../models/invoice');
const { body, validationResult } = require('express-validator');

router.post('/', async function(req, res) {
  const errors = validationResult(req);

  console.log('body', req.body);

  return res.status(404).json({});

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const created = await Invoice.create({});

  return res.json(created);
});

module.exports = router;
