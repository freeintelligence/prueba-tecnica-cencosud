const { EconomicTwist } = require("../models/economicTwist");

module.exports = value => {
  return new Promise(async (resolve, reject) => {
    const obj = await EconomicTwist.findByPk(value);

    if (obj === null) {
      return reject();
    }

    return obj instanceof EconomicTwist ? resolve() : reject();
  });
}
