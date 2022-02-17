const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database');

class EconomicTwist extends Model {}
EconomicTwist.init({
  name: DataTypes.STRING,
}, { sequelize: sequelize, modelName: 'EconomicTwist' });

module.exports = {
  EconomicTwist,
}
