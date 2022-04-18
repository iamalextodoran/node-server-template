import Sequelize from "sequelize";
import User from "./user.js";
import Product from "./product.js";

const config = {
  database: "sequlizeApp",
  host: "127.0.0.1",
  dialect: "postgres",
};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

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
