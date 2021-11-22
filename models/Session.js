const sequelize = require("./sequelize");
const { DataTypes } = require("sequelize");
const Movie = require("./Movie");

const Session = sequelize.define("session", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hall: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seats: {
    type: DataTypes.STRING(400),
    defaultValue: "[[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false]]"
  }
});
Movie.hasMany(Session);

module.exports = Session;