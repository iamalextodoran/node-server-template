"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      hooks: {
        beforeCreate: (record) => {
          if (record.password) {
            const salt = bcrypt.genSaltSync(10, "a");
            record.password = bcrypt.hashSync(record.password, salt);
          }
        },
      },
    }
  );

  return User;
};
