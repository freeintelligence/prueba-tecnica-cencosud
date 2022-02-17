const { validate } = require('rut.js')

module.exports = value => {
  return new Promise((resolve, reject) => {
    if (validate(value)) {
      return resolve();
    }
    return reject('RUT inválido');
  });
}
