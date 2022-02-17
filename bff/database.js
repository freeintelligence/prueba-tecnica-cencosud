const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: path.join(__dirname, 'database', process.env.DB_NAME) });

async function main() {
  await sequelize.authenticate();

  require('./models/economicActivity');
  require('./models/economicTwist');

  await sequelize.sync();
}

main().then(e => console.log('Database connected!')).catch(err => console.log(err));

module.exports = {
  sequelize,
}
