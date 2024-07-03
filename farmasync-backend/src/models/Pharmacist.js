const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Pharmacist extends Model {}

Pharmacist.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Pharmacist',
});

module.exports = Pharmacist;
