const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('farmasync', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
