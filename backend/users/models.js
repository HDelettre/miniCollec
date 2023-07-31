const { Sequelize, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/database");

const user = sequelize.define("user", {
  userId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: "default.png"
  },
  token: {
	  type: DataTypes.STRING
  }
});

module.exports = user;