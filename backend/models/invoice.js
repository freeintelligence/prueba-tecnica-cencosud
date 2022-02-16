const mongoose = require('mongoose');

module.exports.invoiceSchema = new mongoose.Schema({
  name: String,
}, { collection: 'invoices'});

module.exports.Invoice = mongoose.model('Invoice', module.exports.invoiceSchema);
