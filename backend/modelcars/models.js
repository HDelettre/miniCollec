const {DataTypes} = require("sequelize");

const sequelize = require("../config/database");

const carsPicture = require("../modelpictures/models");

const ModelCars = sequelize.define("ModelCars", {
  modelCarsId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  season: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  team: {
    type: DataTypes.STRING,
    allowNull:false
  },
  model: {
    type: DataTypes.STRING,
    allowNull:false
  },
  driver: {
    type: DataTypes.STRING,
    allowNull:false
  },
  race: {
    type: DataTypes.STRING,
    allowNull:false
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull:true
  },
  reference: {
    type: DataTypes.STRING,
    allowNull:true
  },
  status: {
    type: DataTypes.STRING,
    allowNull:false
  }
});

ModelCars.hasMany(carsPicture, {foreignKey: "modelCarsId", onDelete: "CASCADE"});

module.exports = ModelCars;

