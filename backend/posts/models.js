const { Sequelize, DataTypes, INTEGER, DATE } = require("sequelize");

const sequelize = require("../config/database");

const posts = sequelize.define("posts", {
  postId: {
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
  userId: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT
  },
  pictureName: {
    type: DataTypes.STRING
  }
});

module.exports = posts;