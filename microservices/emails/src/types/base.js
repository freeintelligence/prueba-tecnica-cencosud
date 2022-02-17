require('./../mail');

module.exports = class BaseType {

  data = {};

  constructor(data) {
    this.data = data;
  }

  async run() {

  }

}
