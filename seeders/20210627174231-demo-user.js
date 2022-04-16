"use strict";

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "admin@asd.io",
    password: "password",
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
