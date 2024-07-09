const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Pharmacist = require('./Pharmacist');

class Patient extends Model {}

Patient.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Patient',
});

Patient.belongsTo(Pharmacist, { foreignKey: { name: 'fk_pharmacist', allowNull: true } });
Pharmacist.hasMany(Patient, { foreignKey: { name: 'fk_pharmacist', allowNull: true } });

module.exports = Patient;
