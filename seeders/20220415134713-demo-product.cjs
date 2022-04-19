import products from "../mock";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert("Products", products, {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Products", null, {});
}
