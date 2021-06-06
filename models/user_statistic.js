"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStatistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  UserStatistic.init(
    {
      date: DataTypes.STRING,
      page_views: DataTypes.NUMBER,
      clicks: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "UserStatistic",
    }
  );
  return UserStatistic;
};
