const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('farmasync_db', 'admin', 'ninfa2590', {
  host: 'farmasync-db.cd2cayuu2t39.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
});

module.exports = sequelize;
