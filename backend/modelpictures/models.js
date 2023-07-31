const { Sequelize, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/database");

const carsPicture = sequelize.define("carsPicture", {
  carsPictureId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  modelCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false
  },
  pictureName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = carsPicture;