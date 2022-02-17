const BaseType = require("../base");

module.exports = class TypeInvoice extends BaseType {

  constructor(invoiceData) {
    super(invoiceData);
  }

  async run() {
    console.log('llegó el email', this.data);
  }

}
