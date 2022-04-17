"use strict";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((prod, index, array) => ({
  name: "Tricou no." + prod,
  description: "Descriere tricou cu numarul no." + prod,
  category: index % 2 === 0 ? "men" : "women",
  price: 2 ** prod,
  favorite: index % 3 === 0 ? true : false,
  colors: ["red", "blue", "yellow"],
  pictures: [1, 2, 3, 4, 5],
  sizes: [40, 41, 42, 43, 45],
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
