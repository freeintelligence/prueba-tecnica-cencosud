const path = require('path');
const BaseType = require("../base");

module.exports = class TypeInvoice extends BaseType {

  constructor(invoiceData) {
    super(invoiceData);

    this.transmitterViewHtml = path.join(__dirname, 'transmitter-view.html.ejs');
    this.transmitterViewPlain = path.join(__dirname, 'transmitter-view.plain.ejs');

    this.receiverViewHtml = path.join(__dirname, 'receiver-view.html.ejs');
    this.receiverViewPlain = path.join(__dirname, 'receiver-view.plain.ejs');
  }

  async run() {
    //await this.sendTransmitterMail();
    await this.sendReceiverMail();
  }

  async sendTransmitterMail() {
    await this.sendMail(this.data.transmitterBusinessName, this.data.transmitterEmail, 'Factura emitida', await this.getPlain(this.transmitterViewPlain), await this.getHtml(this.transmitterViewHtml));
  }

  async sendReceiverMail() {
    await this.sendMail(this.data.receiverContactName, this.data.receiverContactEmail, 'Factura emitida', await this.getPlain(this.receiverViewPlain), await this.getHtml(this.receiverViewHtml));
  }

}
