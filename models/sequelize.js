const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("course", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false
});

module.exports = sequelize;