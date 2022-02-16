var express = require('express');
var router = express.Router();
const { Invoice } = require('../models/invoice');
const { body, validationResult, matchedData } = require('express-validator');
const rutValidator = require('../validators/rutValidator');

router.post('/',
  /** Validate date */
  body('broadcastDate').isDate({ format: 'DD-MM-YYYY' }),
  /** Validate emitter data */
  body('transmitterBusinessName').isString().isLength({ min: 1, max: 1024 }),
  body('transmitterAddress').isString().isLength({ min: 1, max: 1024 }),
  body('transmitterCommune').isString().isLength({ min: 1, max: 1024 }),
  body('transmitterCity').isString().isLength({ min: 1, max: 1024 }),
  body('transmitterEmail').isEmail().isLength({ min: 1, max: 1024 }),
  body('transmitterPhone').isString().isLength({ min: 7, max: 12 }),
  body('transmitterEconomicTwist').isString().isLength({ min: 1 }),
  body('transmitterEconomicActivity').isString().isLength({ min: 1 }),
  /** Validate receiver data */
  body('receiverRut').isString().isLength({ min: 1, max: 1024 }).custom(rutValidator),
  body('receiverBusinessName').isString().isLength({ min: 1, max: 1024 }),
  body('receiverAddress').isString().isLength({ min: 1, max: 1024 }),
  body('receiverCommune').isString().isLength({ min: 1, max: 1024 }),
  body('receiverCity').isString().isLength({ min: 1, max: 1024 }),
  body('receiverContactName').isString().isLength({ min: 1, max: 1024 }),
  body('receiverContactRut').isString().isLength({ min: 1, max: 1024 }).custom(rutValidator),
  body('receiverEconomicTwist').isString().isLength({ min: 1 }),
  body('receiverContactEmail').isEmail().isLength({ min: 1, max: 1024 }),
  /** Validate products data */
  body('products.*.name').isString().isLength({ min: 1, max: 1024 }),
  body('products.*.amount').toInt().isFloat({ min: 1, max: Number.MAX_SAFE_INTEGER }),
  body('products.*.price').toInt().isFloat({ min: 1, max: Number.MAX_SAFE_INTEGER }),
  async function(req, res) {
  const errors = validationResult(req);

  console.log('body', req.body);
  console.log('sanitized', matchedData(req));

  return res.status(404).json({});

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const created = await Invoice.create({});

  return res.json(created);
});

module.exports = router;
