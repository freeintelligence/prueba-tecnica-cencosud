const { sendMail } = require('./../mail');
const ejs = require('ejs');

require('./../mail');

module.exports = class BaseType {

  constructor(data) {
    this.data = data;

    this.viewHtml = null;
    this.viewPlain = null;

    this.defaultToName = null;
    this.defaultToEmail = null;
    this.defaultSubject = null;
  }

  async run() {
    await this.sendInternalMail();
  }

  async getHtml(viewFile = null) {
    return new Promise((resolve, reject) => {
      ejs.renderFile(viewFile || this.viewHtml, this.data, {}, (err, html) => {
        if (err) {
          return reject(err);
        }

        return resolve(html);
      });
    });
  }

  async getPlain(viewFile = null) {
    return new Promise((resolve, reject) => {
      ejs.renderFile(viewFile || this.viewPlain, this.data, {}, (err, plain) => {
        if (err) {
          return reject(err);
        }

        return resolve(plain);
      });
    });
  }

  async sendInternalMail() {
    await this.sendMail(this.defaultToName, this.defaultToEmail, this.defaultSubject, await this.getHtml(), await this.getPlain());
  }

  async sendMail(toName, toEmail, subject, text, html) {
    return await sendMail(toName, toEmail, subject, text, html);
  }

}
