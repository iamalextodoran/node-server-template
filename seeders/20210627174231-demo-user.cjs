import { genSaltSync, hashSync } from "bcrypt";

const salt = genSaltSync(10, "a");
const hashedPassword = hashSync("password", salt);

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@admin.com",
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert("Users", users, {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("Users", null, {});
};
