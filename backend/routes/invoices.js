var express = require('express');
var router = express.Router();
const { body, validationResult, matchedData } = require('express-validator');
const rutValidator = require('../validators/rutValidator');
const { producer } = require('../kafka');
const economicTwistValidator = require('../validators/economicTwistValidator');
const economicActivityValidator = require('../validators/economicActivityValidator');

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
  body('transmitterEconomicTwist').isInt().custom(economicTwistValidator),
  body('transmitterEconomicActivity').isInt().custom(economicActivityValidator),
  /** Validate receiver data */
  body('receiverRut').isString().isLength({ min: 1, max: 1024 }).custom(rutValidator),
  body('receiverBusinessName').isString().isLength({ min: 1, max: 1024 }),
  body('receiverAddress').isString().isLength({ min: 1, max: 1024 }),
  body('receiverCommune').isString().isLength({ min: 1, max: 1024 }),
  body('receiverCity').isString().isLength({ min: 1, max: 1024 }),
  body('receiverContactName').isString().isLength({ min: 1, max: 1024 }),
  body('receiverContactRut').isString().isLength({ min: 1, max: 1024 }).custom(rutValidator),
  body('receiverEconomicTwist').isInt().custom(economicTwistValidator),
  body('receiverContactEmail').isEmail().isLength({ min: 1, max: 1024 }),
  /** Validate products data */
  body('products.*.name').isString().isLength({ min: 1, max: 1024 }),
  body('products.*.amount').toInt().isFloat({ min: 1, max: Number.MAX_SAFE_INTEGER }),
  body('products.*.price').toInt().isFloat({ min: 1, max: Number.MAX_SAFE_INTEGER }),
  async function(req, res) {
  const errors = validationResult(req);
  const data = matchedData(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    await producer.send({ topic: 'invoices', messages: [ { value: JSON.stringify(data) } ] });
  } catch (err) {
    return res.status(500).json({ message: 'Service Unavailable' });
  }

  //return res.status(201).json({});
  return res.status(404).json({});
});

module.exports = router;
