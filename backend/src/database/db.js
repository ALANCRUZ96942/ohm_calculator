const Sequelize = require('sequelize');
import configurator from './config'

const sequelize = new Sequelize(
    configurator.database, 
    configurator.username, 
    configurator.password, {
    host: configurator.host,
    dialect: 'mysql',
});
  
module.exports = sequelize;