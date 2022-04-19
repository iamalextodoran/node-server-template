import Sequelize from "sequelize";

import User from "./user.js";
import Product from "./product.js";

import config from "../config/index.js";

const settings = config[process.env.NODE_ENV];

const sequelize = new Sequelize(
  settings.database,
  settings.username,
  settings.password,
  settings
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const models = {
  User: User(sequelize, Sequelize),
  Product: Product(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === "function")
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
};

export default db;
