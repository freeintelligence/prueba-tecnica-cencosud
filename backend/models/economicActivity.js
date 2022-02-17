const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../database');

class EconomicActivity extends Model {}
EconomicActivity.init({
  name: DataTypes.STRING,
}, { sequelize: sequelize, modelName: 'EconomicActivity' });

module.exports = {
  EconomicActivity,
}
