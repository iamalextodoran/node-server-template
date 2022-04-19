import { genSaltSync, hashSync } from "bcrypt";

const salt = genSaltSync(10, "a");
const hashedPassword = hashSync("password", salt);

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

export const up = async (queryInterface, Sequelize) => {
  const user = await queryInterface.rawSelect(
    "Users",
    { where: { email: users[0].email } },
    ["id"]
  );

  if (!user) {
    await queryInterface.bulkInsert("Users", users, {});
  }
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("Users", null, {});
};
