"use strict";

const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10, "a");
const hashedPassword = bcrypt.hashSync("password", salt);

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "admin@asd.io",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await queryInterface.rawSelect(
      "Users",
      { where: { email: users[0].email } },
      ["id"]
    );

    if (!user) {
      await queryInterface.bulkInsert("Users", users, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
