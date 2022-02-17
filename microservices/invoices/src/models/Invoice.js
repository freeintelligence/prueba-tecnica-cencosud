const mongoose = require('mongoose');

module.exports.invoiceSchema = new mongoose.Schema({
  broadcastDate: { type: String, required: true },
  transmitterBusinessName: { type: String, required: true },
  transmitterAddress: { type: String, required: true },
  transmitterCommune: { type: String, required: true },
  transmitterCity: { type: String, required: true },
  transmitterEmail: { type: String, required: true },
  transmitterPhone: { type: String, required: true },
  transmitterEconomicTwist: { type: Number, required: true },
  transmitterEconomicActivity: { type: Number, required: true },
  receiverRut: { type: String, required: true },
  receiverBusinessName: { type: String, required: true },
  receiverAddress: { type: String, required: true },
  receiverCommune: { type: String, required: true },
  receiverCity: { type: String, required: true },
  receiverContactName: { type: String, required: true },
  receiverContactRut: { type: String, required: true },
  receiverEconomicTwist: { type: Number, required: true },
  receiverContactEmail: { type: String, required: true },
  products: { type: Array, required: true },

}, { collection: 'invoices' });

module.exports.Invoice = mongoose.model('Invoice', module.exports.invoiceSchema);
