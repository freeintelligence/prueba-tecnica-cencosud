const mongoose = require('mongoose');

module.exports.economicTwistSchema = new mongoose.Schema({
  name: String,
}, { collection: 'economic_twists'});

module.exports.EconomicTwist = mongoose.model('EconomicTwist', module.exports.economicTwistSchema);
