'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../db')

class Resistor extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Resistor.init({
  name: DataTypes.STRING,
  multipler: DataTypes.INTEGER,
  color: DataTypes.STRING,
  tolerance: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Resistor',
});
module.exports =  Resistor;