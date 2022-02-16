const mongoose = require('mongoose');

module.exports.economicActivitySchema = new mongoose.Schema({
  name: String,
}, { collection: 'economic_activities'});

module.exports.EconomicActivity = mongoose.model('EconomicActivity', module.exports.economicActivitySchema);
