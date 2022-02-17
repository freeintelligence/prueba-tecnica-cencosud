const { EconomicActivity } = require("../models/economicActivity");

module.exports = value => {
  return new Promise(async (resolve, reject) => {
    const obj = await EconomicActivity.findByPk(value);

    if (obj === null) {
      return reject();
    }

    return obj instanceof EconomicActivity ? resolve() : reject();
  });
}
